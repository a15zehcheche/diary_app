<template lang="">
    <div class="wrapper">
        <header>
        <p class="current-date"></p>
        <div class="icons">
            <span id="prev" class="material-symbols-rounded">{{"<"}}</span>
            <span id="next" class="material-symbols-rounded">{{">"}}</span>
        </div>
        </header>
        <div class="calendar">
            <ul class="weeks">
                <li>Sun</li>
                <li>Mon</li>
                <li>Tue</li>
                <li>Wed</li>
                <li>Thu</li>
                <li>Fri</li>
                <li>Sat</li>
            </ul>
            <ul class="days"></ul>
        </div>
    </div>

</template>
<script>
export default {
    mounted() {
        const daysTag = document.querySelector(".days"),
            currentDate = document.querySelector(".current-date"),
            prevNextIcon = document.querySelectorAll(".icons span");

        let date = new Date(),
            currYear = date.getFullYear(),
            currMonth = date.getMonth();

        const months = ["January", "February", "March", "April", "May", "June", "July",
            "August", "September", "October", "November", "December"];

        const renderCalendar = () => {
            let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(),
                lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(),
                lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(),
                lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
            let liTag = "";

            for (let i = firstDayofMonth; i > 0; i--) {
                liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
            }

            for (let i = 1; i <= lastDateofMonth; i++) {
                let isToday = i === date.getDate() && currMonth === new Date().getMonth()
                    && currYear === new Date().getFullYear() ? "active" : "";
                liTag += `<li class="${isToday}">${i}</li>`;
            }

            for (let i = lastDayofMonth; i < 6; i++) {
                liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
            }
            currentDate.innerText = `${months[currMonth]} ${currYear}`;
            daysTag.innerHTML = liTag;
        }
        renderCalendar();

        prevNextIcon.forEach(icon => {
            icon.addEventListener("click", () => {
                currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

                if (currMonth < 0 || currMonth > 11) {
                    date = new Date(currYear, currMonth);
                    currYear = date.getFullYear();
                    currMonth = date.getMonth();
                } else {
                    date = new Date();
                }
                renderCalendar();
            });
        }); 
    }
}

</script>
<style >
.material-symbols-rounded {
    font-family: 'Material Symbols Rounded';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    -webkit-font-feature-settings: 'liga';
    -webkit-font-smoothing: antialiased;
}



.wrapper {
    width: 400px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
}

.wrapper header {
    display: flex;
    align-items: center;
    padding: 25px 30px 10px;
    justify-content: space-between;
}

header .icons {
    display: flex;
}

header .icons span {
    height: 38px;
    width: 38px;
    margin: 0 1px;
    cursor: pointer;
    color: #878787;
    text-align: center;
    line-height: 38px;
    font-size: 1.9rem;
    user-select: none;
    border-radius: 50%;
}

.icons span:last-child {
    margin-right: -10px;
}

header .icons span:hover {
    background: #f2f2f2;
}

header .current-date {
    font-size: 1.45rem;
    font-weight: 500;
}

.calendar {
    padding: 0px;
}

.calendar ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    text-align: center;
    padding: 0;

}

.calendar .days {
    margin-bottom: 20px;
}

.calendar li {
    color: #333;
    width: calc(100% / 7);
    font-size: 1.07rem;
}

.calendar .weeks li {
    font-weight: 500;
    cursor: default;
}

.calendar .days li {
    z-index: 1;
    cursor: pointer;
    position: relative;
    margin-top: 30px;
}

.days li.inactive {
    color: #aaa;
}

.days li.active {
    color: #fff;
}

.days li::before {
    position: absolute;
    content: "";
    left: 50%;
    top: 50%;
    height: 40px;
    width: 40px;
    z-index: -1;
    border-radius: 50%;
    transform: translate(-50%, -50%);
}

.days li.active::before {
    background: #9B59B6;
}

.days li:not(.active):hover::before {
    background: #f2f2f2;
}

@media screen and (max-width: 500px) {
    .wrapper header {
        padding: 20px 23px 10px;
    }

    .calendar {
        padding: 15px 18px;
    }
}
</style>