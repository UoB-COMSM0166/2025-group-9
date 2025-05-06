class soundManager{
    constructor(soundFile){
        this.soundFile = loadSound(soundFile);
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
        }
    }

    isPlaying(){
        return this.soundFile && this.soundFile.isPlaying();
    }
}