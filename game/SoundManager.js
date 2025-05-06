class soundManager{
    constructor(soundFile){
        this.soundFile = loadSound(soundFile);
        this.defaultVolume = 0.2;
        this.applyDefaultVolume();
    }


    applyDefaultVolume(){
        if(this.soundFile){
            this.soundFile.setVolume(this.defaultVolume);
        }
    }

    play(mode){
        if(!this.soundFile){
            return;
        }
        const playing = this.soundFile.isPlaying();
        if(mode === 'loop'){
            if(!playing) {
                this.soundFile.loop();
            }
        }
        else if(mode === 'once' || !playing){
            this.soundFile.play();
        }
    }
    
    stop(){
        if(this.soundFile && this.soundFile.isPlaying()){
            this.soundFile.stop();
        }
    }

    setVolume(volume){
        if(this.soundFile){
            this.soundFile.setVolume(volume);
            this.defaultVolume = volume;
        }
    }

    isPlaying(){
        return this.soundFile && this.soundFile.isPlaying();
    }
}