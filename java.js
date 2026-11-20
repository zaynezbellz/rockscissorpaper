const gameContainer = document.querySelector(".container"),
    userResult = document.querySelector(".user_result img"),
    cpuResult = document.querySelector(".cpu_result img"),
    result = document.querySelector(".result"),
    optionImages = document.querySelectorAll(".option_image");

optionImages.forEach((image, index) => {
    image.addEventListener("click", (e) => {
        image.classList.add("active");

        userResult.src = cpuResult.src = "https://64.media.tumblr.com/249b53bade375e00b6ac3a82da84d2fd/5b72a451849936b4-0a/s400x600/a0d2c9215b8490d1e62e7ddaddde635071eb9132.pnj";
        result.textContent = "Wait..."

        optionImages.forEach((image2, index2) => {
            index !== index2 && image2.classList.remove("active");
        });


        gameContainer.classList.add("start");

        let time = setTimeout(() => {
            gameContainer.classList.remove("start");
            let imageSrc = e.target.src;
            userResult.src = imageSrc;


            let randomNumber = Math.floor(Math.random() * 3);
            let cpuImages = ["https://64.media.tumblr.com/249b53bade375e00b6ac3a82da84d2fd/5b72a451849936b4-0a/s400x600/a0d2c9215b8490d1e62e7ddaddde635071eb9132.pnj", "https://64.media.tumblr.com/d67613a0bcaa779ca7944910dc5a3941/5b72a451849936b4-59/s400x600/1416d553d5377bd3c4ef52e3c66380494f19c64a.pnj", "https://64.media.tumblr.com/ffa8bb33bae7b687330917765b1d5e7c/5b72a451849936b4-e2/s500x750/d992d33b350e1c9fe4c015efae649776d376eb7e.pnj"];
            cpuResult.src = cpuImages[randomNumber];


            let cpuValue = ["R", "P", "S"][randomNumber];
            let userValue = ["R", "P", "S"][index];


            let outcomes = {
                RR: "Draw",
                RP: "Cpu",
                RS: "User",
                PP: "Draw",
                PR: "User",
                PS: "Cpu",
                SS: "Draw",
                SR: "Cpu",
                SP: "User",
            }


            let outcomeValue = outcomes[userValue + cpuValue];


            result.textContent = userValue === cpuValue ? "Match Draw !" : `${outcomeValue} Won!!`;
        },2500)
       
        });
    });
