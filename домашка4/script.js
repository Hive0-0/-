document.addEventListener('DOMContentLoaded', function () {
    let count1 = 0;
    const button1 = document.getElementById('clickButton');
    const display1 = document.getElementById('clickCount');
    const message = document.getElementById('message');

    button1.addEventListener('click', function () {
        count1++;
        display1.textContent = count1;

        if (count1 >= 15) {
            button1.disabled = true;
            message.textContent = "Вы достигли максимального количества кликов!";
        }
    });
    let count2 = 10;
    const display2 = document.getElementById('timer2');
    const resetButton2 = document.getElementById('resetButton2');
    let interval2;

    function startTimer2() {
        if (interval2) {
            clearInterval(interval2);
        }
        
        interval2 = setInterval(function () {
            count2--;
            display2.textContent = count2;

            if (count2 <= 0) {
                clearInterval(interval2);
                display2.textContent = "Время вышло!";
                interval2 = null;
            }
        }, 1000);
    }

    startTimer2();

    resetButton2.addEventListener('click', function () {
        clearInterval(interval2);
        count2 = 10;
        display2.textContent = count2;
        startTimer2();
    });
    let count3 = 0;
    let interval3;
    const display3 = document.getElementById('timer3');
    const startButton = document.getElementById('startButton');
    const stopButton = document.getElementById('stopButton');
    const resetButton3 = document.getElementById('resetButton3');

    startButton.addEventListener('click', function () {
        if (!interval3) {
            interval3 = setInterval(function () {
                count3++;
                display3.textContent = count3;
            }, 1000);
        }
    });

    stopButton.addEventListener('click', function () {
        clearInterval(interval3);
        interval3 = null;
    });

    resetButton3.addEventListener('click', function () {
        clearInterval(interval3);
        interval3 = null;
        count3 = 0;
        display3.textContent = count3;
    });
});