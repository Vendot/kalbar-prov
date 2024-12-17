document.addEventListener('DOMContentLoaded', function() {
    const monthData = {
    'Januari 2024': { days: 31, startDay: 1 },
    'Februari 2024': { days: 29, startDay: 4 }, // 2024 adalah tahun kabisat
    'Maret 2024': { days: 31, startDay: 5 },
    'April 2024': { days: 30, startDay: 1 },
    'Mei 2024': { days: 31, startDay: 3 },
    'Juni 2024': { days: 30, startDay: 6 },
    'Juli 2024': { days: 31, startDay: 1 },
    'Agustus 2024': { days: 31, startDay: 4 },
    'September 2024': { days: 30, startDay: 0 },
    'Oktober 2024': { days: 31, startDay: 1 },
    'November 2024': { days: 30, startDay: 4 },
    'December 2024': { days: 31, startDay: 0 }
    };

// Updated events data with organization information
const events = {
'Oktober 2024': [
    {
        date: 1,
        time: '09:00 - 11:00',
        link: 'https://litbang.kalbarprov.go.id/',
        description: 'Rapat evaluasi kinerja tim bulan September',
        organization: 'litbang'
    },
    {
        date: 5,
        time: '12:00 - 14:00',
        link: 'https://kalbarprov.go.id/agenda/',
        description: 'Workshop pengenalan metode design thinking untuk tim product',
        organization: 'diskominfo'
    },
    {
        date: 5,
        time: '13:00 - 16:00',
        link: 'https://biroadpem.kalbarprov.go.id/',
        description: 'Workshop pengenalan metode design thinking untuk tim product',
        organization: 'biro-adpem'
    },
    {
        date: 10,
        time: '10:00-11:00',
        link: 'https://kalbarprov.go.id/agenda/',
        description: 'Batas waktu pengumpulan deliverables Project A',
        organization: 'bappeda'
    },
    {
        date: 10,
        time: '17:00-19:00',
        link: 'https://kalbarprov.go.id/agenda/',
        description: 'Batas waktu pengumpulan deliverables Project A',
        organization: 'bappeda'
    },
    {
        date: 11,
        time: '13:00-14.00',
        link: 'https://kalbarprov.go.id/agenda/',
        description: 'Batas waktu pengumpulan deliverables Project A',
        organization: 'bappeda'
    },
    {
        date: 11,
        time: '13:00-24:00',
        link: 'https://kalbarprov.go.id/agenda/',
        description: 'Batas waktu pengumpulan deliverables Project A',
        organization: 'bappeda'
    },
    {
        date: 12,
        time: '11:00-24:00',
        link: 'https://kalbarprov.go.id/agenda/',
        description: 'Batas waktu pengumpulan deliverables Project A',
        organization: 'bappeda'
    },
    {
        date: 12,
        time: '12:00-24:00',
        link: 'https://kalbarprov.go.id/agenda/',
        description: 'Batas waktu pengumpulan deliverables Project A',
        organization: 'bappeda'
    },
    {
        date: 12,
        time: '13:00-24:00',
        link: 'https://kalbarprov.go.id/agenda/',
        description: 'Batas waktu pengumpulan deliverables Project A',
        organization: 'bappeda'
    },
    {
        date: 15,
        time: '17:00 - 18',
        link: 'https://kalbarprov.go.id/agenda/',
        description: 'Batas waktu pengumpulan deliverables Project A',
        organization: 'bappeda'
    },
    {
        date: 20,
        time: '08:00 - 17:00',
        description: 'Acara team building dan outbound tahunan',
        organization: 'diskominfo'
    },
    {
        date: 20,
        time: '09:00 - 16:00',
        description: 'Acara outbound tahunan',
        organization: 'biro-adpem'
    },
    {
        date: 25,
        time: '10:00 - 12:00',
        description: 'Review tim engineering',
        organization: 'litbang'
    },
    {
        date: 25,
        time: '10:00 - 12:00',
        description: 'Review sprint development tim engineering',
        organization: 'bappeda'
    },
    {
        date: 25,
        time: '10:00 - 12:00',
        description: 'Review sprint development tim engineering',
        organization: 'diskominfo'
    },
    {
        date: 27,
        time: '10:00 - 12:00',
        description: 'Review sprint development tim engineering',
        organization: 'bappeda'
    },
    {
        date: 27,
        time: '11:00 - 12:00',
        description: 'Review sprint development tim engineering',
        organization: 'bappeda'
    },
    {
        date: 27,
        time: '11:00 - 15:00',
        description: 'Review sprint development tim engineering',
        organization: 'bappeda'
    },
    {
        date: 25,
        time: '10:00 - 12:00',
        description: 'Review sprint development tim engineering',
        organization: 'bappeda'
    },
    {
        date: 26,
        time: '10:00 - 12:00',
        description: 'Review sprint development tim engineering',
        organization: 'bappeda'
    },
    {
        date: 27,
        time: '10:00 - 12:00',
        description: 'Review sprint development tim engineering',
        organization: 'bappeda'
    },
    {
        date: 28,
        time: '10:00 - 12:00',
        description: 'Review sprint development tim engineering',
        organization: 'bappeda'
    },
    {
        date: 29,
        time: '10:00 - 12:00',
        description: 'Review sprint development tim engineering',
        organization: 'bappeda'
    },
    {
        date: 29,
        time: '12:00 - 22:00',
        description: 'Review sprint development tim engineering',
        organization: 'bappeda'
    },
    {
        date: 29,
        time: '14:00 - 15:00',
        description: 'Review sprint development tim engineering',
        organization: 'bappeda'
    }
],
'September 2024': [
    {
        date: 28,
        time: '14:00 - 16:00',
        description: 'Meeting persiapan laporan akhir bulan',
        organization: 'biro-adpem'
    }
],
'December 2024': [
    {
        date: 20,
        time: '18:00 - 22:00',
        description: 'Acara gathering akhir tahun perusahaan',
        organization: 'diskominfo'
    }
]
};

let currentMonthName = 'Oktober 2024';
let firstClickedDate = null;
let secondClickedDate = null;
let selectedDateRange = [];
let currentPage = 1;
const eventsPerPage = 3;
let selectedOrg = 'all';

// Add organization selector event listener
document.getElementById('orgSelector').addEventListener('change', function(e) {
    selectedOrg = e.target.value;
    currentPage = 1;
    // Reset date selection when changing organization
    firstClickedDate = null;
    secondClickedDate = null;
    selectedDateRange = [];
    // Update calendar and show all events for the month when 'all' is selected
    updateCalendar();
    if (selectedOrg === 'all') {
        updateEventsList(); // Call without date range to show all events
    }
});

function updateCalendar() {
const datesGrid = document.getElementById('datesGrid');
const currentMonthSpan = document.getElementById('currentMonth');
const monthInfo = monthData[currentMonthName];

currentMonthSpan.textContent = currentMonthName;
datesGrid.innerHTML = '';

// Add empty cells for days before the 1st
for (let i = 0; i < monthInfo.startDay; i++) {
    const emptyCell = document.createElement('div');
    emptyCell.className = 'empty-cell';
    datesGrid.appendChild(emptyCell);
}

// Create date buttons
for (let date = 1; date <= monthInfo.days; date++) {
    const dateCell = document.createElement('div');
    dateCell.className = 'date-cell';
    if (hasEvent(date)) {
        dateCell.classList.add('has-event');
    }
    dateCell.setAttribute('data-date', date);
    
    const button = document.createElement('button');
    button.className = 'date-button';
    button.textContent = date;
    
    dateCell.appendChild(button);
    datesGrid.appendChild(dateCell);
}

// Update events list for all events in the month
updateEventsList();

// Add click event listeners
document.querySelectorAll('.date-button').forEach(button => {
    button.addEventListener('click', (e) => {
        const dateCell = e.target.closest('.date-cell');
        const clickedDate = parseInt(dateCell.getAttribute('data-date'));
        handleDateClick(clickedDate);
    });
});

}


// Update navigation buttons state
const prevButton = document.getElementById('prevMonth');
const nextButton = document.getElementById('nextMonth');

// Update kondisi disabled untuk range 12 bulan
prevButton.disabled = currentMonthName === 'Januari 2024';
nextButton.disabled = currentMonthName === 'December 2024';

if (prevButton.disabled) prevButton.classList.add('disabled');
else prevButton.classList.remove('disabled');

if (nextButton.disabled) nextButton.classList.add('disabled');
else nextButton.classList.remove('disabled');

function hasEvent(date) {
const monthEvents = events[currentMonthName] || [];
return monthEvents.some(event => 
    event.date === date && 
    (selectedOrg === 'all' || event.organization === selectedOrg)
);
}

function updateEventsList(dateRange = null) {
    const eventsList = document.getElementById('eventsList');
    const selectedDatesDiv = document.getElementById('selectedDates');
    eventsList.innerHTML = '';

    let monthEvents = events[currentMonthName] || [];

    // Filter events by selected organization
    if (selectedOrg !== 'all') {
        monthEvents = monthEvents.filter(event => event.organization === selectedOrg);
    }

    // Only apply date range filter if not showing all events
    if (dateRange && dateRange.length > 0 && selectedOrg !== 'all') {
        monthEvents = monthEvents.filter(event => dateRange.includes(event.date));
        selectedDatesDiv.textContent = `${dateRange[0]} - ${dateRange[dateRange.length - 1]} ${currentMonthName}`;
    } else {
        selectedDatesDiv.textContent = currentMonthName;
    }

    // Sort events by date and time
    monthEvents.sort((a, b) => {
        if (a.date === b.date) {
            return a.time.localeCompare(b.time);
        }
        return a.date - b.date;
    });

    // Group events by date
    const eventsByDate = monthEvents.reduce((acc, event) => {
        if (!acc[event.date]) {
            acc[event.date] = [];
        }
        acc[event.date].push(event);
        return acc;
    }, {});

    // Convert grouped events into rows
    const eventRows = [];
    Object.entries(eventsByDate).forEach(([date, dateEvents]) => {
        const rowsForDate = [];
        for (let i = 0; i < dateEvents.length; i += 2) {
            rowsForDate.push({
                date: parseInt(date),
                events: dateEvents.slice(i, i + 2)
            });
        }
        eventRows.push(...rowsForDate);
    });

    // Rest of the pagination and display logic remains the same
    const rowsPerPage = 3;
    const totalRows = eventRows.length;
    const totalPages = Math.ceil(totalRows / rowsPerPage);

    const startRow = (currentPage - 1) * rowsPerPage;
    const endRow = Math.min(startRow + rowsPerPage, totalRows);
    const currentPageRows = eventRows.slice(startRow, endRow);

    let currentDate = null;

    // Display events
    if (currentPageRows.length === 0) {
        eventsList.innerHTML = '<p>Tidak ada acara untuk periode yang dipilih</p>';
        return;
    }

    currentPageRows.forEach((row) => {
        if (currentDate !== row.date) {
            currentDate = row.date;

            const dateGroupContainer = document.createElement('div');
            dateGroupContainer.className = 'date-group-container';

            const dateGroup = document.createElement('div');
            dateGroup.className = 'date-separator';
            const dayName = new Date(2024, currentMonthName === 'Oktober' ? 9 : 8, row.date)
                .toLocaleDateString('id-ID', { weekday: 'long' });
            dateGroup.textContent = `${dayName}, ${row.date} ${currentMonthName}`;

            const eventsGrid = document.createElement('div');
            eventsGrid.className = 'events-grid';

            dateGroupContainer.appendChild(dateGroup);
            dateGroupContainer.appendChild(eventsGrid);
            eventsList.appendChild(dateGroupContainer);

            row.events.forEach(event => {
                addEventToGrid(event, eventsGrid);
            });
        } else {
            const eventsGrid = document.querySelector('.events-grid:last-child');
            row.events.forEach(event => {
                addEventToGrid(event, eventsGrid);
            });
        }
    });
// Previous pagination code in updateEventsList function should be replaced with this:
if (totalRows > 0) {
const pagination = document.createElement('div');
pagination.className = 'pagination-agenda-calender';

// Previous button - Now always enabled
const prevButton = document.createElement('button');
prevButton.id = 'prevBtn';
prevButton.innerHTML = '<i class="fa-solid fa-angle-left"></i>';
prevButton.addEventListener('click', () => {
// If we're at page 1 and showing a sequence like 5 6 1 2 3,
// clicking prev should go to the last visible number before 1
if (currentPage === 1) {
    const numbers = Array.from(document.querySelectorAll('.page-number'));
    const lastBeforeOne = numbers.find(n => parseInt(n.textContent) > 1);
    if (lastBeforeOne) {
        currentPage = parseInt(lastBeforeOne.textContent);
    } else {
        currentPage = totalPages; // Fallback to last page
    }
} else {
    currentPage--;
}
updateEventsList(selectedDateRange);
});

// Numbers container
const numbersContainer = document.createElement('div');
numbersContainer.className = 'number';

// Calculate page numbers for sliding window
function getPageNumbers(currentPage, totalPages) {
let numbers = [];

// Handle circular display for first page
if (currentPage === 1) {
    if (totalPages >= 3) numbers.push(totalPages - 1);
    if (totalPages >= 2) numbers.push(totalPages);
    numbers.push(1);
    if (totalPages >= 2) numbers.push(2);
    if (totalPages >= 3) numbers.push(3);
}
// Handle circular display for second page
else if (currentPage === 2) {
    numbers.push(totalPages);
    numbers.push(1);
    numbers.push(2);
    if (totalPages >= 3) numbers.push(3);
    if (totalPages >= 4) numbers.push(4);
}
// Handle circular display for second-to-last page
else if (currentPage === totalPages - 1) {
    if (totalPages >= 4) numbers.push(totalPages - 3);
    numbers.push(totalPages - 2);
    numbers.push(totalPages - 1);
    numbers.push(totalPages);
    numbers.push(1);
}
// Handle circular display for last page
else if (currentPage === totalPages) {
    if (totalPages >= 3) numbers.push(totalPages - 2);
    numbers.push(totalPages - 1);
    numbers.push(totalPages);
    numbers.push(1);
    if (totalPages >= 2) numbers.push(2);
}
// For middle pages
else {
    numbers = [
        currentPage - 2,
        currentPage - 1,
        currentPage,
        currentPage + 1,
        currentPage + 2
    ];
}

// Filter out invalid page numbers
numbers = numbers.filter(num => num > 0 && num <= totalPages);

// Ensure we show exactly 5 numbers if possible
while (numbers.length < 5 && numbers.length < totalPages) {
    const nextNum = numbers[numbers.length - 1] + 1;
    if (nextNum <= totalPages) {
        numbers.push(nextNum);
    } else {
        const prevNum = numbers[0] - 1;
        if (prevNum > 0) {
            numbers.unshift(prevNum);
        } else {
            break;
        }
    }
}

return numbers;
}

// Create page number buttons
const pageNumbers = getPageNumbers(currentPage, totalPages);
pageNumbers.forEach(i => {
const pageNumber = document.createElement('div');
pageNumber.className = `page-number${i === currentPage ? ' selected' : ''}`;
pageNumber.id = `page${i}`;
pageNumber.textContent = i;
pageNumber.addEventListener('click', () => {
    currentPage = i;
    updateEventsList(selectedDateRange);
});
numbersContainer.appendChild(pageNumber);
});

// Next button - Now always enabled
const nextButton = document.createElement('button');
nextButton.id = 'nextBtn';
nextButton.innerHTML = '<i class="fa-solid fa-angle-right"></i>';
nextButton.addEventListener('click', () => {
// If we're at the last visible number and showing a sequence like 5 6 1 2 3,
// clicking next on page 3 should go to page 5
const numbers = Array.from(document.querySelectorAll('.page-number'));
if (currentPage === parseInt(numbers[numbers.length - 1].textContent)) {
    const firstHigherNumber = numbers.find(n => parseInt(n.textContent) > currentPage);
    if (firstHigherNumber) {
        currentPage = parseInt(firstHigherNumber.textContent);
    } else {
        currentPage = 1; // Wrap around to first page
    }
} else {
    currentPage++;
}
updateEventsList(selectedDateRange);
});

pagination.appendChild(prevButton);
pagination.appendChild(numbersContainer);
pagination.appendChild(nextButton);
eventsList.appendChild(pagination);
} else {
eventsList.innerHTML = '<p>Tidak ada acara untuk periode yang dipilih</p>';
}
}

// Modify the addEventToGrid function to add click handler
function addEventToGrid(event, eventsGrid) {
    // Ambil waktu mulai saja dari string waktu event
    const startTime = event.time.split('-')[0];
    
    // Fungsi untuk memotong teks dan menambahkan ellipsis
    function truncateText(text, wordLimit = 3) {
        const words = text.split(' ');
        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(' ') + '...';
        }
        return text;
    }
    
    const eventElement = document.createElement('div');
    eventElement.className = 'event-item';
    
    eventElement.innerHTML = `
        <div class="event-time">
            <div class="event-time-main">${startTime}</div>
            <div class="event-time-sub">${event.time}</div>
        </div>
        <div class="event-content">
            <div class="event-location">
                <i class="fa-solid fa-location-dot" style="color: #79b597;"></i>
                <span>${event.location || 'Lokasi tidak ditentukan'}</span>
            </div>
            <div class="event-link">
                <i class="fa-solid fa-globe" style="color: #79b597;"></i>
                <span>${event.link || 'Tidak ada tautan'}</span>
            </div>
            <div class="event-link">
                <i class="fa-solid fa-file-lines" style="color: #79b597;"></i>
                <span>${truncateText(event.description) || 'Tidak ada deskripsi'}</span>
            </div>
        </div>
    `;

    // Add click event listener to show modal
    eventElement.addEventListener('click', () => {
        showEventModal(event);
    });

    eventsGrid.appendChild(eventElement);
}

    // Add modal functionality
    const modal = document.getElementById('eventModal');
    const modalClose = modal.querySelector('.modal-close');

    function showEventModal(event) {
        document.getElementById('modalTime').textContent = event.time;
        document.getElementById('modalLocation').textContent = event.location || 'Lokasi tidak ditentukan';
        document.getElementById('modalWebsite').textContent = event.link || 'Tidak ada tautan';
        document.getElementById('modalDescription').textContent = event.description || 'Tidak ada deskripsi';
        
        modal.style.display = 'flex';
    }

    modalClose.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });


    function handleDateClick(clickedDate) {
        // If this is the first click or starting a new selection
        if (firstClickedDate === null) {
            // Clear previous selection
            document.querySelectorAll('.date-cell').forEach(cell => {
                cell.classList.remove('range-start', 'range-end');
                cell.querySelector('.date-button').classList.remove('active-date', 'in-range');
                const bg = cell.querySelector('.range-background');
                if (bg) bg.remove();
            });

            firstClickedDate = clickedDate;
            // Mark only the first clicked date
            const cell = document.querySelector(`.date-cell[data-date="${clickedDate}"]`);
            if (cell) {
                const button = cell.querySelector('.date-button');
                button.classList.add('active-date');
                cell.classList.add('range-start');
            }
            return;
        }

        // This is the second click
        secondClickedDate = clickedDate;
        selectedDateRange = [];

        // Determine the start and end dates (handle reverse order)
        const startDate = Math.min(firstClickedDate, secondClickedDate);
        const endDate = Math.max(firstClickedDate, secondClickedDate);

        // Generate the date range
        for (let currentDate = startDate; currentDate <= endDate; currentDate++) {
            if (currentDate <= monthData[currentMonthName].days) {
                selectedDateRange.push(currentDate);
            }
        }

        // Update the visual representation
        const dateCells = Array.from(document.querySelectorAll('.date-cell[data-date]'));
        dateCells.forEach(cell => {
            const cellDate = parseInt(cell.getAttribute('data-date'));
            const button = cell.querySelector('.date-button');
            
            // Clear previous styling
            cell.classList.remove('range-start', 'range-end');
            button.classList.remove('active-date', 'in-range');
            const bg = cell.querySelector('.range-background');
            if (bg) bg.remove();

            // Apply new styling if date is in range
            if (selectedDateRange.includes(cellDate)) {
                if (cellDate === startDate) {
                    button.classList.add('active-date');
                    cell.classList.add('range-start');
                } else if (cellDate === endDate) {
                    button.classList.add('active-date');
                    cell.classList.add('range-end');
                } else {
                    button.classList.add('in-range');
                    const background = document.createElement('div');
                    background.className = 'range-background';
                    cell.insertBefore(background, button);
                }
            }
        });

        // Update events list with selected date range
        currentPage = 1; // Reset to first page
        updateEventsList(selectedDateRange);

        // Reset for next selection
        firstClickedDate = null;
        secondClickedDate = null;
}

// Initialize calendar
updateCalendar();

// Add event listeners for navigation
document.getElementById('prevMonth').addEventListener('click', () => {
const months = Object.keys(monthData);
const currentIndex = months.indexOf(currentMonthName);
if (currentIndex > 0) {
    currentMonthName = months[currentIndex - 1];
    selectedDateRange = [];
    currentPage = 1;
    updateCalendar();
}
});

document.getElementById('nextMonth').addEventListener('click', () => {
const months = Object.keys(monthData);
const currentIndex = months.indexOf(currentMonthName);
if (currentIndex < months.length - 1) {
    currentMonthName = months[currentIndex + 1];
    selectedDateRange = [];
    currentPage = 1;
    updateCalendar();
}
});
});