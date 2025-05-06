class ImagePreloader{
    constructor(){
        this.imageSet = {
            homeImage : 'homepage',
            gameDifficultyImage : 'gamedifficulty',
            gameOverImage: 'gameover',
            mazeFloorHardImage: 'mazefloorhard',
            mazeFloorEasyImage: 'mazeflooreasy',
            missionCompleteImage: 'missioncomplete',
            chemInfoPopupImg: 'chem-info-popup',
            vialQuestionImg: 'chem-question',
            vialCongratsImg: 'vial-congrats',
            vialTryAgainImg: 'try-again',
            botanyNoteImg: 'plant-info-popup',
            botanyQuestionImg: 'plant-question-popup',
            botanyCongratsImg: 'plant-congrats',
            botanyTryAgainImg: 'plant-try-again',
            keyReminderPopupImg: 'key-reminder',
            hurryToLabImg: 'hurry-to-lab',
            liftImg: 'lift',
            botanyLeftImg: 'botanyLeft80',
            botanyRightImg: 'botanyRight80',
            chemistryLeftImg: 'chemistryLeft80',
            chemistryRightImg: 'chemistryRight80',
            lockTreeImg: 'lock',
            flowerImg: 'flower',
            keyImg: 'key',
            flaskImg: 'flask',
            liftInstructionImg: 'lift-popup'
        };

        this.suffixes = {
            default: '',
            protanopia: 'RBP',
            deuteranopia: 'GBD'
        };

        this.images = {};
        this.slideNames = ['infopage1', 'infopage2', 'infopage3'];
        this.currentFilter = 'default';
    }

    preloadImages(){
        for(const filter in this.suffixes){
            const suffix = this.suffixes[filter];
            const setImgs = {};
            for(const key in this.imageSet){
                const base = this.imageSet[key];
                setImgs[key] = loadImage(`assets/${base}${suffix}.png`);
            }
            setImgs.infoSlides = this.slideNames.map(base => loadImage(`assets/${base}${suffix}.png`));
            this.images[filter] = setImgs;
        }
    }



    loadSet(filter){
        const setImgs = this.images[filter] || this.images.default;
        for (const key in this.imageSet){
            window[key] = setImgs[key];
        }
        window.infoSlides = setImgs.infoSlides;
    }

    get(keyOrIndex){
        const setImgs = this.images[this.currentFilter] || this.images.default;
        if(typeof keyOrIndex === 'number') {
            return setImgs.infoSlides[keyOrIndex];
        }
        return setImgs[keyOrIndex];
    }

}



