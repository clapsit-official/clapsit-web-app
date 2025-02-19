export default async function (effect = 1, volume=20) {
    try {
        var audio = new Audio(`../../assets/sound/effect${effect}.mp3`);
        audio.volume = volume / 100;
        await audio.play();
        return audio;
    } catch(error){
        throw error;
    }
}
