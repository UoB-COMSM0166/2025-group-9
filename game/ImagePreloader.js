//manages the loading up and the colour filters of the images used within the game
class ImagePreloader{
    constructor(){
        //basenames shared by all sets of images used within the game
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
            liftInstructionImg: 'lift-popup',
            settingsGearImg: 'settings-gear'
        };
        
        //filename suffixes for the respective colour filters
        this.suffixes = {
            default: '',
            protanopia: 'RBP',
            deuteranopia: 'GBD'
        };

        this.images = {};
        this.slideNames = ['infopage1', 'infopage2', 'infopage3'];
    }

    //preloads every image for every colour filter set
    preloadImages(){
        for(const filter in this.suffixes){
            const suffix = this.suffixes[filter];
            const setImgs = {};
            for(const key in this.imageSet){
                const base = this.imageSet[key];
                setImgs[key] = loadImage(`assets/${base}${suffix}.png`); //concatenates basename suffix and loadimage command to load each image in a set
            }
            setImgs.infoSlides = this.slideNames.map(base => loadImage(`assets/${base}${suffix}.png`));
            this.images[filter] = setImgs;
        }
    }

    //selects the colour filter set to be used in the game and copies the images to the global window
    loadSet(filter){
        const setImgs = this.images[filter] || this.images.default;
        for (const key in this.imageSet){
            window[key] = setImgs[key];
        }
        window.infoSlides = setImgs.infoSlides;
        return setImgs;
    }

}



