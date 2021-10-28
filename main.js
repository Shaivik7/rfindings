function main(){
    let query = window.matchMedia("(max-width: 768px)");
    if (query.matches){
        document.querySelector('#button2').addEventListener('click', btn3)
        var newUrl1 = ""

        function btn3(){
            document.querySelector('#button1').style.boxShadow = "none";
            document.querySelector('#button2').style.boxShadow = "inset 1.2rem 0 0 0 orangered";
            document.querySelector('.showcase').style.backgroundImage = "url('Intro page pics/Image 2.jpg')";
            document.querySelector('.showcase').style.backgroundRepeat = "no-repeat";
            document.querySelector('.showcase').style.backgroundSize = "fit";
            document.querySelector('.showcase').style.backgroundPosition = "0 0";
            
            const main2 = document.querySelector('.showcase');
            const styles2 = window.getComputedStyle(main2);
            const image2 = styles2.backgroundImage;

            newUrl1 = image2.slice(5, -2).replace(/['"]/g, "");
        document.querySelector('#button1').addEventListener('click', btn4)
        var url3 = ""
        function btn4(){
            document.querySelector('#button2').style.boxShadow = "none";
            document.querySelector('#button1').style.boxShadow = "inset 1.2rem 0 0 0 orangered";
            document.querySelector('.showcase').style.backgroundImage = "url('Intro page pics/Image 1.jpg')";
            document.querySelector('.showcase').style.backgroundRepeat = "no-repeat";
            document.querySelector('.showcase').style.backgroundPosition = "0 3rem";
            document.querySelector('.showcase').style.backgroundSize = "fit";
            const main3 = document.querySelector('.showcase');
            const styles3 = window.getComputedStyle(main3);
            const image3 = styles3.backgroundImage;

            url3 = image3.slice(5, -2).replace(/['"]/g, "");
        }

        function changeImage4(){
            if(url3 == "file:///C:/Coding%20projects%20WEB%20devs/Dads%20website/Intro%20page%20pics/Image%201.jpg" ){
            btn3();
        }
        }
        function changeImage3(){
            if(newUrl1 !== "file:///C:/Coding%20projects%20WEB%20devs/Dads%20website/Intro%20page%20pics/Image%201.jpg" ){
            btn4();
        }
    }

        setInterval(changeImage3, 4000);
        setInterval(changeImage4, 8000);
    }}else{
        document.querySelector('#button1').addEventListener('click', btn1)
        document.querySelector('#button2').addEventListener('click', btn2)

        var newUrl = ""

        function btn2(){
            document.querySelector('#button1').style.boxShadow = "none";
            document.querySelector('#button2').style.boxShadow = "inset 1.2rem 0 0 0 orangered";
            document.querySelector('.showcase').style.backgroundImage = "url('Intro page pics/Image 2.jpg')";
            document.querySelector('.showcase').style.backgroundRepeat = "no-repeat";
            document.querySelector('.showcase').style.backgroundSize = "cover";
            document.querySelector('.showcase').style.backgroundPosition = "0 -15.625rem";
            const main1 = document.querySelector('.showcase');
            const styles1 = window.getComputedStyle(main1);
            const image1 = styles1.backgroundImage;

            newUrl = image1.slice(5, -2).replace(/['"]/g, "");
        }
        function btn1(){
            document.querySelector('#button2').style.boxShadow = "none";
            document.querySelector('#button1').style.boxShadow = "inset 1.2rem 0 0 0 orangered";
            document.querySelector('.showcase').style.backgroundImage = "url('Intro page pics/Image 1.jpg')";
            document.querySelector('.showcase').style.backgroundRepeat = "no-repeat";
            document.querySelector('.showcase').style.backgroundPosition = "0 0";
            document.querySelector('.showcase').style.backgroundSize = "cover";
        }

        const main = document.querySelector('.showcase');
        const styles = window.getComputedStyle(main);
        const image = styles.backgroundImage;

        const url = image.slice(5, -2).replace(/['"]/g, "");

        function changeImage(){
            if(url == "file:///C:/Coding%20projects%20WEB%20devs/Dads%20website/Intro%20page%20pics/Image%201.jpg" ){
            btn2();
        }
        }
        function changeImage1(){
            if(newUrl !== "file:///C:/Coding%20projects%20WEB%20devs/Dads%20website/Intro%20page%20pics/Image%201.jpg" ){
            btn1();
        }}
        

        setInterval(changeImage, 4000);
        setInterval(changeImage1, 8000);
    }
}

main();





// document.querySelector('#button1').addEventListener('click', btn1)
// document.querySelector('#button2').addEventListener('click', btn2)

// var newUrl = ""

// function btn2(){
//     document.querySelector('#button1').style.boxShadow = "none";
//     document.querySelector('#button2').style.boxShadow = "inset 1.2rem 0 0 0 orangered";
//     document.querySelector('.showcase').style.backgroundImage = "url('Intro page pics/Image 2.jpg')";
//     document.querySelector('.showcase').style.backgroundRepeat = "no-repeat";
//     document.querySelector('.showcase').style.backgroundSize = "cover";
//     document.querySelector('.showcase').style.backgroundPosition = "0 -15.625rem";
//     const main1 = document.querySelector('.showcase');
//     const styles1 = window.getComputedStyle(main1);
//     const image1 = styles1.backgroundImage;

//     newUrl = image1.slice(5, -2).replace(/['"]/g, "");
// }
// function btn1(){
//     document.querySelector('#button2').style.boxShadow = "none";
//     document.querySelector('#button1').style.boxShadow = "inset 1.2rem 0 0 0 orangered";
//     document.querySelector('.showcase').style.backgroundImage = "url('Intro page pics/Image 1.jpg')";
//     document.querySelector('.showcase').style.backgroundRepeat = "no-repeat";
//     document.querySelector('.showcase').style.backgroundPosition = "0 0";
//     document.querySelector('.showcase').style.backgroundSize = "cover";
// }

// const main = document.querySelector('.showcase');
// const styles = window.getComputedStyle(main);
// const image = styles.backgroundImage;

// const url = image.slice(5, -2).replace(/['"]/g, "");

// function changeImage(){
//     if(url == "file:///C:/Coding%20projects%20WEB%20devs/Dads%20website/Intro%20page%20pics/Image%201.jpg" ){
//         btn2();
//     }
// }
// function changeImage1(){
//     if(newUrl !== "file:///C:/Coding%20projects%20WEB%20devs/Dads%20website/Intro%20page%20pics/Image%201.jpg" ){
//         btn1();
//     }
// }

// setInterval(changeImage, 4000);
// setInterval(changeImage1, 8000);