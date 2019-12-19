/** @type {CanvasRenderingContext2D} */

const canvas = document.getElementById('sorting');
const ctx = canvas.getContext('2d');
document.getElementById("drawSorting").style.animationDelay = "1s";

let arr = [1];
for(let i = 21; i >= 1; i--)
{
    let randomNumber = Math.floor(Math.random() * 25) + 1;
    if(!arr.includes(randomNumber))
    {
        arr[i] = randomNumber;
    }else
    {
        i++;
    }

}
let count = 0;
console.log(arr);
const widthArray = [canvas.width];

renderScreen();

// for(let i = 0; i < widthArray; i++)
// {
//     ctx.fillStyle = 'red';
//     ctx.fillRect(i * canvas.width, canvas.height - widthArray[i], 15, widthArray[i]);
// }


function renderScreen()
{
    setTimeout(function()
    {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
    
        for(let i = 0; i < arr.length - 1; i++)
        {
            ctx.fillStyle = 'lightblue';
            ctx.fillRect(canvas.width - 21 * i, canvas.height - (arr[i] * 6), 20, 150)
        }

        quickSort(arr, 0, arr.length - 1);


        requestAnimationFrame(renderScreen)
    }, 250);
}



function recursion(arr, startingPos, endPos)
{
    if(startingPos >= endPos)
    {
        return;
    }
    
    quickSort(arr, startingPos + 1, endPos);
    quickSort(arr, 0, startingPos - 1);
}

function quickSort(arr, movingIndex, pivotIndex)
{
    let pivotIndexValue = arr[pivotIndex];
    // console.log(arr);

    for(let i = movingIndex; i < pivotIndex; i++)
    {
        if(i == movingIndex && movingIndex + 1 < arr.length && arr[i] > arr[movingIndex + 1])
        {
            swapPositions(arr, i, movingIndex + 1)
            movingIndex++;
        }else if(arr[i] < pivotIndexValue)
        {
            swapPositions(arr, i, movingIndex);
            movingIndex++;
        }
    }

    swapPositions(arr, movingIndex, pivotIndex);
    console.log(arr);
    recursion(arr, movingIndex, pivotIndex);
}

function swapPositions(arr, a, b)
{
    if(arr[a] && arr[b])
    {
        let temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    }
}