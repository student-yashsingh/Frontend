//   JS is also a SAAS(software as a service) language.
//  CANVAS is a saas product made with the help of the javascript.

// creating a buisness name generator by combining the list of adjectives and shop name and another word.

/* 
ADJECTIVES: 
crazy,amazing,fire

SHOP NAME:
engine,foods,garments

ANOTHER WORD:
Bros,Limited,Hub*/

// The Math.floor() static method always rounds down and returns the
// largest integer less than or equal to a given number.
console.log("BUISNESS NAME GENERATOR")
function Adjective()
{
    let a="Crazy";
    let b="Amazing";
    let c="Fire";
    let ran = Math.floor(Math.random()*3);
    {
        switch(ran)
        {
            case 0:
                return a;
                break;
            case 1:
                return b;
                break;
            case 2:
                return c;
                break;
        }
    }
}

function shopname()
{
    let a="engine";
    let b="foods";
    let c="garments";
    let ran = Math.floor(Math.random()*3);
    {
        switch(ran)
        {
            case 0:
                return a;
                break;
            case 1:
                return b;
                break;
            case 2:
                return c;
                break;
        }
    }
}

function another_word()
{
    let a="Bros";
    let b="limited";
    let c="Hub";
    let ran = Math.floor(Math.random()*3);
    {
        switch(ran)
        {
            case 0:
                return a;
                break;
            case 1:
                return b;
                break;
            case 2:
                return c;
                break;
        }
    }
}
console.log("The new business name is :" + Adjective()+ " "+
shopname()+ " " +another_word() );


