// 1
function nonsense (string){
    var blab = function (){
        alert(string);
    }
    blab()
};

// 2
function nonsense (string){
    var blab = function (){
        alert(string);
    }
    setTimeout(blab,2000);
};

// 3
function nonsense (string){
    function blab (){
        alert(string);
    }
    return blab;
}
var blabLater = nonsense('sunny');
blabLater();
var blabAgainLater = nonsense('suraj');
blabAgainLater()

// 4
var nameOuter = function (firstName) {
    var nameInner = function (lastName) {
        console.log(firstName +" " + lastName)
    }
    return nameInner;
}
var firstName = nameOuter('Developer');
firstName('Sunny');

// 5
var storyWriter = function () {
    var innerStory = '';
        return {
            addWords: function(word){
                innerStory += " "+ word;
                return innerStory
            },
            erase: function () {
                innerStory = ''
               return  innerStory;
            }
               
    }
}


var loveFarmStory = storyWriter();
loveFarmStory.addWords('hey its sunny');
loveFarmStory.addWords('and i am a developer');
