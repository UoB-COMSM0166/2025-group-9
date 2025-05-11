class SoundManager{
    constructor(soundFile){
        this.soundFile = loadSound(soundFile);
        this.defaultVolume = 0.2;
        this.applyDefaultVolume();
    }

    //set volume of the soundfile to default value
    applyDefaultVolume(){
        if(this.soundFile){
            this.soundFile.setVolume(this.defaultVolume);
        }
    }

    // if sound file already playing don't play. If loop mode indicated play soundfile in loop, otherwise play once.
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
        else if(mode === 'once'){
            if(!playing){
                this.soundFile.play();
            }          
        }
        else{
            if(!playing){
                this.soundFile.play();
            }
        }
    }
    
    //if sound is currently playing, stop it
    stop(){
        if(this.soundFile && this.soundFile.isPlaying()){
            this.soundFile.stop();
        }
    }

    //change soundfile volume from default
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