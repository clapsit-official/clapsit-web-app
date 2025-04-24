export default defineEventHandler(async (event) => {
  try {
    if(event.context.params){
      const response = await fetch(`${useRuntimeConfig().public.href}/api/v1/aim/json_generator/${event.context.params.c_id}`);
      return response;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
});