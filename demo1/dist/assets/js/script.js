document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'AIzaSyDRTs9ergyHPJC5lxRcsYhuDwN2blyqYR4';
    const spreadsheetId = '1F4jD0n0-oZMPX6Cp4dIoYQMuwH-pDthWqXq_8OwMGU0';
    const range = 'sheet2!A1:D10';

    gapi.load('client', () => {
        gapi.client.init({
            'apiKey': apiKey,
            'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
        }).then(() => {
            console.log('Google API client initialized successfully.'); // Log thông báo khi khởi tạo thành công

            getDataFromSheet(spreadsheetId, range);
        }).catch(err => {
            console.error('Error initializing Google API client: ', err);
        });
    });
});

function getDataFromSheet(spreadsheetId, range) {
    gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: spreadsheetId,
        range: range,
    }).then(response => {
        const data = response.result.values;

        if (data.length > 0) {
            displayData(data);
        } else {
            console.log('No data found.');
        }
    }).catch(err => {
        console.error('Error getting data from Google Sheets API: ', err);
    });
}

function displayData(data) {
    const dataList = document.getElementById('dataList');

    data.forEach(row => {
        const listItem = document.createElement('li');
        listItem.className = 'nav-item mb-3 me-0';

        const link = document.createElement('a');
        link.className = 'nav-link nav-link-border-solid btn btn-outline btn-flex btn-active-color-primary flex-column flex-stack pt-9 pb-7 page-bg show active';
        link.setAttribute('data-bs-toggle', 'pill');
        link.setAttribute('href', '#kt_pos_food_content_1');
        link.setAttribute('role', 'tab');
        link.style.width = '138px';
        link.style.height = '180px';
        link.setAttribute('aria-selected', 'true');

        const iconDiv = document.createElement('div');
        iconDiv.className = 'nav-icon mb-3';

        const img = document.createElement('img');
		img.src = row[0];
		img.className = 'w-50px';
		img.alt = 'Product Image';
		img.style.width = '50px';
		img.style.height = '50px';
		iconDiv.appendChild(img);

        const infoDiv = document.createElement('div');
        const titleSpan = document.createElement('span');
        titleSpan.className = 'text-gray-800 fw-bold fs-2 d-block';
        titleSpan.textContent = row[1];

        const optionSpan = document.createElement('span');
        optionSpan.className = 'text-gray-400 fw-semibold fs-7';
        optionSpan.textContent = row[2];

        infoDiv.appendChild(titleSpan);
        infoDiv.appendChild(optionSpan);

        link.appendChild(iconDiv);
        link.appendChild(infoDiv);
        listItem.appendChild(link);

        dataList.appendChild(listItem);
    });
}

