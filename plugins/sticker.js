const handler = async (event) => {
  try {
    // Get the sticker pack ID from the event
    const stickerPackId = event.stickerPackId;
    // Get the sticker pack info from the WhatsApp API
    const response = await fetch(`https://api.whatsapp.com/v1/stickers/${stickerPackId}`);
    const stickerPackInfo = await response.json();
    // Get the sticker images from the WhatsApp API
    const stickerImages = [];
    for (const sticker of stickerPackInfo.stickers) {
      const response = await fetch(sticker.image_url);
      const stickerImage = await response.blob();
      stickerImages.push(stickerImage);
    }
    // Create a new directory for the sticker pack
    const dir = await Deno.mkdir(`sticker_packs/${stickerPackId}`);
    // Save the sticker images to the new directory
    for (const i in stickerImages) {
      const stickerImage = stickerImages[i];
      const fileName = `sticker_${i}.png`;
      const file = await Deno.open(`${dir}/${fileName}`, { write: true });
      await file.write(stickerImage);
      file.close();
    }
    // Return a success message
    return {
      statusCode: 200,
      body: 'Sticker pack downloaded successfully!',
    };
  } catch (e) {
    console.error(e);
    if (e instanceof Deno.errors.NotFound) {
      return {
        statusCode: 404,
        body: 'Sticker pack not found.',
      };
    } else {
      return {
        statusCode: 500,
        body: 'An error occurred.',
      };
    }
  }
};
export default handler;