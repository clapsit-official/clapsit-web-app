export default defineEventHandler(async (event) => {
  try {
    if (event.context.params) {
      const url = `${useRuntimeConfig().public.href}/api/v1/aim/json_generator/${event.context.params.c_id}`;
      const response = await fetch(url, {
        headers: {
          'Accept-Encoding': 'identity',
        },
      });
      const data = await response.json();
      return data;
    }
    return { error: 'Parametre sağlanmadı' };
  } catch (error) {
    console.error('API Hatası:', error);
    throw createError({
      statusCode: 500,
      message: 'Dahili sunucu hatası',
    });
  }
});