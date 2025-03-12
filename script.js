let index = 0;

        function moveSlide(direction) {
            const carousel = document.querySelector('.carousel');
            const images = document.querySelectorAll('.carousel img');
            const total = images.length;
            
            index += direction;
            if (index < 0) {
                index = total - 1;
            } else if (index >= total) {
                index = 0;
            }

            const offset = -index * 100;
            carousel.style.transform = `translateX(${offset}%)`;
        }