const apiKey = 'AIzaSyDRTs9ergyHPJC5lxRcsYhuDwN2blyqYR4';
const spreadsheetId = '1F4jD0n0-oZMPX6Cp4dIoYQMuwH-pDthWqXq_8OwMGU0';
let page = 1;
const data = [];
document.addEventListener('DOMContentLoaded', () => {
    const rangeSheet2 = 'sheet2!A1:D10';
    const rangeSheet1 = 'sheet1';

    gapi.load('client', () => {
        gapi.client.init({
            'apiKey': apiKey,
            'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
        }).then(() => {
            console.log('Google API client initialized successfully.');

            getDataFromSheet(spreadsheetId, rangeSheet2);
            getDataFromSheet1(spreadsheetId, rangeSheet1);
        }).catch(err => {
            console.error('Error initializing Google API client: ', err);
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const youtubeLinks = document.querySelectorAll('.youtube-link');

    youtubeLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const newTab = window.open('https://shopee.vn/1qCgPDhTqX', '_blank');
            if (newTab) {
                newTab.focus();
            } else {
                alert('Trình duyệt của bạn đã chặn cửa sổ popup. Vui lòng kiểm tra cài đặt và thử lại.');
            }
        });
    });
});


function updatePageNumber() {
    document.getElementById('currentPage').textContent = currentPage;
}
// Tương tự cho 'previousPage' và các nút số trang khác

let currentPage = 1;
const itemsPerPage = 20;
function paginateData(data, page, itemsPerPage) {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return data.slice(start, end);
}

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

function getDataFromSheet1(spreadsheetId, range) {
    gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: spreadsheetId,
        range: range,
    }).then(response => {
        const data = response.result.values;

        if (data.length > 0) {
            displayDataInProductList(data);
        } else {
            console.log('No data found.');
        }
    }).catch(err => {
        console.error('Error getting data from Google Sheets API: ', err);
    });
}

function displayData(data) {
    const dataList = document.getElementById('dataList');

    let isFirstRow = true;

    data.forEach((row, index) => {
        const listItem = document.createElement('li');
        listItem.className = 'nav-item mb-3 me-0';

        const link = document.createElement('a');
        link.className = 'nav-link nav-link-border-solid btn btn-outline btn-flex btn-active-color-primary flex-column flex-stack pt-9 pb-7 page-bg';
        link.setAttribute('data-bs-toggle', 'pill');
        link.setAttribute('href', `#kt_pos_food_content_${index + 1}`); // Sử dụng index để tạo href động
        link.setAttribute('role', 'tab');
        link.style.width = '138px';
        link.style.height = '180px';
        link.setAttribute('aria-selected', isFirstRow ? 'true' : 'false');

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

        isFirstRow = false;
    });
}
function displayDataInProductList(data) {
    const productList = document.getElementById('product_list');
    productList.innerHTML = ''; // Xóa nội dung hiện tại

    function createCard(row) {
        const cardDiv = document.createElement('div');
        cardDiv.className = 'card card-flush flex-row-fluid p-6 pb-5 mw-100';

        const cardBodyDiv = document.createElement('div');
        cardBodyDiv.className = 'card-body text-center';

        const imgContainerDiv = document.createElement('div');
        imgContainerDiv.className = 'symbol symbol-35px symbol-circle';
        imgContainerDiv.setAttribute('data-bs-toggle', 'tooltip');
        imgContainerDiv.setAttribute('title', row[5]);

        const img = document.createElement('img');
        img.src = row[1];
        img.className = 'rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px';
        img.alt = '';

        imgContainerDiv.appendChild(img);
        cardBodyDiv.appendChild(imgContainerDiv);

        const infoDiv = document.createElement('div');
        infoDiv.className = 'mb-2';

        const titleDiv = document.createElement('div');
        titleDiv.className = 'text-center';
        titleDiv.style.display = 'flex';
        titleDiv.style.flexDirection = 'column';
        titleDiv.style.alignItems = 'center';

        const nameSpan = document.createElement('span');
        nameSpan.className = 'fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1';
        nameSpan.textContent = row[3];

        const merchantSpan = document.createElement('span');
        merchantSpan.className = 'text-gray-400 fw-semibold d-block fs-6 mt-n1';
        merchantSpan.textContent = row[4];

        merchantSpan.style.maxWidth = '200px';
        merchantSpan.style.wordBreak = 'break-word';
        merchantSpan.style.textAlign = 'center';
        titleDiv.style.alignItems = 'center';
        titleDiv.appendChild(nameSpan);
        titleDiv.appendChild(merchantSpan);

        infoDiv.appendChild(titleDiv);

        const campaignLink = document.createElement('a');
        campaignLink.className = 'text-success text-end fw-bold fs-1';
        campaignLink.textContent = row[2];
        campaignLink.href = row[6];
        campaignLink.target = '_blank';

        campaignLink.style.color = 'green';
        campaignLink.style.textAlign = 'right';
        campaignLink.style.fontWeight = 'bold';
        campaignLink.style.fontSize = '1rem';

        cardBodyDiv.appendChild(infoDiv);
        cardBodyDiv.appendChild(campaignLink);

        cardDiv.appendChild(cardBodyDiv);

        return cardDiv;
    }

    function appendDataToProductList(start, end) {
        const paginatedData = data.slice(start, end);

        paginatedData.forEach((row) => {
            const card = createCard(row);
            productList.appendChild(card);
        });
    }

    let page = 1; // Số trang hiện tại
    const itemsPerPage = 20; // Số sản phẩm hiển thị mỗi lần

    function loadMoreData() {
        const start = (page - 1) * itemsPerPage;
        const end = page * itemsPerPage;

        appendDataToProductList(start, end);

        page++;
    }

    loadMoreData();

    window.addEventListener('scroll', () => {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

        if (scrollTop + clientHeight >= scrollHeight - 20) {
            loadMoreData();
        }
    });
}

