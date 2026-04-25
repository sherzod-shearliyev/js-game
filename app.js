// JS Codes
const btn = document.querySelector(".btn");
const first_player = document.querySelector('.first_player')
const result = document.querySelector('.result')
const second_player = document.querySelector('.second_player')
 
result.textContent = "o'yin boshlanishi uchun tugmani bos!!!!!!!!!!!!!!!!!!!"

function getrandomnumber(num) {
    return Math.round(Math.random() * num);
}

function setimgattribute( random_number, img )  {
    if (random_number == 0) {
        img.setAttribute("src", "./img/paper.jpg" )
    }   else if (random_number == 1) {
        img.setAttribute("src", "./img/rock.jpg" )
    } else if (random_number == 2) {
        img.setAttribute("src", "./img/qaychi.jpg" )
    }
}

btn.addEventListener("click", () => {
    const first_random_number = getrandomnumber(2);
    const second_random_number = getrandomnumber(2);

    setimgattribute(first_random_number, first_player);
    setimgattribute(second_random_number, second_player);

    if (first_random_number == second_random_number) {
        first_player.setAttribute("src", "./img/qaychi.jpg" )
    }

        if (second_random_number == 0) {
        second_player.setAttribute("src", "./img/paper.jpg" )
    }else if (second_random_number == 1) {
        second_player.setAttribute("src", "./img/rock.jpg" )
    }else if (second_random_number == 2) {
        second_player.setAttribute("src", "./img/qaychi.jpg" )
    }

        if (first_random_number == second_random_number) {
        result.innerHTML = "Draw"
        result.style.color = "blue"
    } else if (first_random_number == 0 && second_random_number == 1) {
        result.innerHTML = "Player-1 win"
        result.style.color = "green"
    } else if (first_random_number == 1 && second_random_number == 2) {
        result.innerHTML = "Player-1 win"
        result.style.color = "green"
    } else if (first_random_number == 2 && second_random_number == 0) {
        result.innerHTML = "Player-1 win"
        result.style.color = "green"
    } else {
        result.innerHTML = "Player-2 win"
        result.style.color = "red"
    }


});