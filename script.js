const daysEl = document.getElementById('days');
const monthYearEl = document.getElementById('monthYear');
let date = new Date();

function renderCalendar() {
    const year = date.getFullYear(), month = date.getMonth();
    monthYearEl.innerText = `${date.toLocaleString('default', { month: 'long' })} ${year}`;

    daysEl.innerHTML = Array.from({ length: new Date(year, month + 1, 0).getDate() }, (_, i) => {
        const day = i + 1;
        const today = day === date.getDate() && new Date().getMonth() === month && new Date().getFullYear() === year;
        return `<div class="${today ? 'today' : ''}">${day}</div>`;
    }).join('');
}

function changeMonth(offset) {
    date.setMonth(date.getMonth() + offset);
    renderCalendar();
}

renderCalendar();