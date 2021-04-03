const counters = document.querySelectorAll('.counter_box');
counters.forEach( (counter) => {
    counter.innerHTML = 0;

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        // console.log(typeof(target));
        const startingNum = Number(counter.innerHTML);
        const incr = target / 100 ;

        if(startingNum < target){
            counter.innerHTML = `${Math.round(startingNum + incr)}`;
            setTimeout(updateCounter, 10)
        }else{
            counter.innerHTML = target;
        }
    }


    updateCounter();
})

