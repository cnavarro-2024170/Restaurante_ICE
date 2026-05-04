import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { useRestaurantStore } from '../store/restaurantStore';

const RestaurantModal = () => {
  const { isModalOpen, setIsModalOpen, createRestaurant, updateRestaurant, selectedRestaurant, setSelectedRestaurant } = useRestaurantStore();
  const { register, handleSubmit, reset, setValue, watch } = useForm();
  
  const [preview, setPreview] = useState(null);
  const imageFile = watch('image');

  useEffect(() => {
    if (imageFile && imageFile.length > 0) {
      const file = imageFile[0];
      setPreview(URL.createObjectURL(file));
    }
  }, [imageFile]);

  useEffect(() => {
    if (selectedRestaurant) {
      setValue('name', selectedRestaurant.name);
      setValue('address', selectedRestaurant.address);
      setValue('phone', selectedRestaurant.phone);
      setValue('openingHours', selectedRestaurant.openingHours);
      setValue('description', selectedRestaurant.description);
      setPreview(null);
    } else {
      reset();
      setPreview(null);
    }
  }, [selectedRestaurant, setValue, reset]);

  if (!isModalOpen) return null;

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('address', data.address);
    formData.append('phone', data.phone);
    formData.append('openingHours', data.openingHours);
    formData.append('description', data.description);

    if (data.image && data.image[0]) {
      formData.append('image', data.image[0]);
    }

    let success;
    if (selectedRestaurant) {
      success = await updateRestaurant(selectedRestaurant._id, formData);
      if (success) {
        Swal.fire({
          icon: 'success',
          title: 'Actualizado',
          text: 'El restaurante se actualizó correctamente',
          confirmButtonColor: '#F97316'
        });
      }
    } else {
      success = await createRestaurant(formData);
      if (success) {
        Swal.fire({
          icon: 'success',
          title: 'Creado',
          text: 'El restaurante se creó exitosamente',
          confirmButtonColor: '#F97316'
        });
      }
    }

    if (success) handleClose();
  };

  const handleClose = () => {
    reset();
    setPreview(null);
    setSelectedRestaurant(null);
    setIsModalOpen(false);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-lg p-6">
        <h3 className="text-xl font-bold mb-4">
          {selectedRestaurant ? 'Editar Restaurante' : 'Nuevo Restaurante'}
        </h3>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Nombre</label>
            <input {...register('name', { required: true })} className="w-full border rounded-lg px-3 py-2" type="text" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Dirección</label>
            <input {...register('address', { required: true })} className="w-full border rounded-lg px-3 py-2" type="text" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Teléfono</label>
              <input {...register('phone', { required: true })} className="w-full border rounded-lg px-3 py-2" type="text" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Horario</label>
              <input {...register('openingHours', { required: true })} className="w-full border rounded-lg px-3 py-2" type="text" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Descripción</label>
            <textarea {...register('description')} className="w-full border rounded-lg px-3 py-2" rows="2"></textarea>
          </div>
          
          <div>
             <label className="block text-sm font-medium mb-1">Imagen</label>
             <input type="file" {...register('image')} className="w-full text-sm"/>
             {preview && (
               <img src={preview} className="mt-2 w-full h-32 object-cover rounded-lg border" alt="Previsualización" />
             )}
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <button type="button" onClick={handleClose} className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
              Cancelar
            </button>
            <button type="submit" className="bg-main-orange text-white px-4 py-2 rounded-lg">
              {selectedRestaurant ? 'Actualizar' : 'Guardar'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RestaurantModal;