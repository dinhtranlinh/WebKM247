var apiKey = 'AIzaSyDRTs9ergyHPJC5lxRcsYhuDwN2blyqYR4';
var spreadsheetId = '1F4jD0n0-oZMPX6Cp4dIoYQMuwH-pDthWqXq_8OwMGU0';
document.addEventListener('DOMContentLoaded', () => {
    const rangeSheet3 = 'sheet3';

    gapi.load('client', () => {
        gapi.client.init({
            'apiKey': apiKey,
            'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
        }).then(() => {
            console.log('Google API client initialized successfully.');
            getDataFromSheet3(spreadsheetId, rangeSheet3);
        }).catch(err => {
            console.error('Error initializing Google API client: ', err);
        });
    });
});

function getDataFromSheet3(spreadsheetId, range) {
    gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: spreadsheetId,
        range: range,
    }).then(response => {
        const globalData = response.result.values;

        if (globalData.length > 1) {
            const dataWithoutHeader = globalData.slice(1); // Loại bỏ hàng đầu tiên (tiêu đề)
            renderAds(dataWithoutHeader); 
        } else {
            console.log('No data found.');
        }
    }).catch(err => {
        console.error('Error getting data from Google Sheets API: ', err);
    });
}


function displayHeader() {
    const headerHTML = 
        `
        <div class="app-header-menu app-header-mobile-drawer align-items-stretch" data-kt-drawer="true" data-kt-drawer-name="app-header-menu" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="250px" data-kt-drawer-direction="end" data-kt-drawer-toggle="#kt_app_header_menu_toggle" data-kt-swapper="true" data-kt-swapper-mode="{default: 'append', lg: 'prepend'}" data-kt-swapper-parent="{default: '#kt_app_body', lg: '#kt_app_header_wrapper'}">
            <div class="menu menu-rounded menu-column menu-lg-row my-5 my-lg-0 align-items-stretch fw-semibold px-2 px-lg-0" id="kt_app_header_menu" data-kt-menu="true">
									<!--begin:Menu item-->
									<div data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="bottom-start" class="menu-item here show menu-here-bg menu-lg-down-accordion me-0 me-lg-2">
										<!--begin:Menu link-->
										<span class="menu-link">
											<span class="menu-title">Tin Khuyến Mại</span>
											<span class="menu-arrow d-lg-none"></span>
										</span>
										<!--end:Menu link-->
										<!--begin:Menu sub-->
										<div class="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown p-0 w-100 w-lg-850px">
											<!--begin:Dashboards menu-->
											<div class="menu-state-bg menu-extended overflow-hidden overflow-lg-visible" data-kt-menu-dismiss="true">
												<!--begin:Row-->
												<div class="row">
													<!--begin:Col-->
													<div class="col-lg-8 mb-3 mb-lg-0 py-3 px-3 py-lg-6 px-lg-6">
														<!--begin:Row-->
														<div class="row">
															<!--begin:Col-->
															<div class="col-lg-6 mb-3">
																<!--begin:Menu item-->
																<div class="menu-item p-0 m-0">
																	<!--begin:Menu link-->
																	<a href="http://tinkhuyenmai247.com/" class="menu-link">
																		<span class="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
																			<i class="ki-duotone ki-element-11 text-primary fs-1">
																				<span class="path1"></span>
																				<span class="path2"></span>
																				<span class="path3"></span>
																				<span class="path4"></span>
																			</i>
																		</span>
																		<span class="d-flex flex-column">
																			<span class="fs-6 fw-bold text-gray-800">Trang chủ</span>
																			<span class="fs-7 fw-semibold text-muted">Tin khuyến mại</span>
																		</span>
																	</a>
																	<!--end:Menu link-->
																</div>
																<!--end:Menu item-->
															</div>
															<!--end:Col-->
															<!--begin:Col-->
															<div class="col-lg-6 mb-3">
																<!--begin:Menu item-->
																<div class="menu-item p-0 m-0">
																	<!--begin:Menu link-->
																	<a href="https://shope.ee/1qCgPDhTqX" class="menu-link" target="_blank">
																		<span class="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
																			<i class="ki-duotone ki-basket text-danger fs-1">
																				<span class="path1"></span>
																				<span class="path2"></span>
																				<span class="path3"></span>
																				<span class="path4"></span>
																			</i>
																		</span>
																		<span class="d-flex flex-column">
																			<span class="fs-6 fw-bold text-gray-800">Mã khuyến mại</span>
																			<span class="fs-7 fw-semibold text-muted">Danh sách các mã khuyến mại</span>
																		</span>
																	</a>
																	<!--end:Menu link-->
																</div>
																<!--end:Menu item-->
															</div>
															<!--end:Col-->
															
														</div>
														<!--end:Row-->
														<div class="separator separator-dashed mx-5 my-5"></div>
														<!--begin:Landing-->
														<div class="d-flex flex-stack flex-wrap flex-lg-nowrap gap-2 mx-5">
															<div class="d-flex flex-column me-5">
																<div class="fs-6 fw-bold text-gray-800">Page bán các tài nguyên mmo </div>
																<div class="fs-7 fw-semibold text-muted">Trang bán tool, nguyên liệu, dịch vụ cho công việc kiếm tiền online</div>
															</div>
															<a href="https://www.facebook.com/cuahangmmo" class="btn btn-sm btn-primary fw-bold" target="_blank">Xem page</a>
														</div>
														<!--end:Landing-->
													</div>
													<!--end:Col-->
													<!--begin:Col-->
													<div class="menu-more bg-light col-lg-4 py-3 px-3 py-lg-6 px-lg-6 rounded-end">
														<!--begin:Heading-->
														<h4 class="fs-6 fs-lg-4 text-gray-800 fw-bold mt-3 mb-3 ms-4">Khóa học Shopee,Lazada,Sendo</h4>
														<!--end:Heading-->
														<!--begin:Menu item-->
														<div class="menu-item p-0 m-0">
															<!--begin:Menu link-->
															<a href="https://tinkhuyenmai247.com/TMDT/shopee-lazada-sendo-doanh-so.html" class="menu-link py-2" target="_blank">
																<span class="menu-title">Shopee, Lazada, Sendo - Tăng Doanh Số x2 x5</span>
															</a>
															<!--end:Menu link-->
														</div>
														<!--end:Menu item-->														
													</div>
													<!--end:Col-->
												</div>
												<!--end:Row-->
											</div>
											<!--end:Dashboards menu-->
										</div>
										<!--end:Menu sub-->
									</div>
									<!--end:Menu item-->
									<!--begin:Menu item-->
									<div data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="bottom-start" class="menu-item menu-lg-down-accordion me-0 me-lg-2">
										<!--begin:Menu link-->
										<span class="menu-link">
											<span class="menu-title">Facebook</span>
											<span class="menu-arrow d-lg-none"></span>
										</span>
										<!--end:Menu link-->
										<!--begin:Menu sub-->
										<div class="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown p-0">
											<!--begin:Pages menu-->
											<div class="menu-active-bg px-4 px-lg-0">
												<!--begin:Tabs nav-->
												<div class="d-flex w-100 overflow-auto">
													<ul class="nav nav-stretch nav-line-tabs fw-bold fs-6 p-0 p-lg-10 flex-nowrap flex-grow-1">
														<!--begin:Nav item-->
														<li class="nav-item mx-lg-1">
															<a class="nav-link py-3 py-lg-6 active text-active-primary" href="https://shope.ee/1qCgPDhTqX" data-bs-toggle="tab" data-bs-target="#kt_app_header_menu_pages_pages">Video</a>
														</li>
														<!--end:Nav item-->
														<!--begin:Nav item-->
														<li class="nav-item mx-lg-1">
															<a class="nav-link py-3 py-lg-6 text-active-primary" href="https://shope.ee/1qCgPDhTqX" data-bs-toggle="tab" data-bs-target="#kt_app_header_menu_pages_account">Tài liệu</a>
														</li>														
													</ul>
												</div>
												<!--end:Tabs nav-->
												<!--begin:Tab content-->
												<div class="tab-content py-4 py-lg-8 px-lg-7">
													<!--begin:Tab pane-->
													<div class="tab-pane active w-lg-1000px" id="kt_app_header_menu_pages_pages">
														<!--begin:Row-->
														<div class="row">
															<!--begin:Col-->
															<div class="col-lg-8">
																<!--begin:Row-->
																<div class="row">
																	<!--begin:Col-->
																	<div class="col-lg-3 mb-6 mb-lg-0">
																		<!--begin:Menu heading-->
																		<h4 class="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Facebook Ads</h4>
																		<!--end:Menu heading-->
																		<!--begin:Menu item-->
																		<div id="fb-ad-container">																		
																		</div>
																		<!--end:Menu item-->
																		
																	</div>
																	<!--end:Col-->
																	<!--begin:Col-->
																	<div class="col-lg-3 mb-6 mb-lg-0">
																		<!--begin:Menu section-->
																		<div class="mb-6">
																			<!--begin:Menu heading-->
																			<h4 class="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Chatbot Messenger</h4>
																			<!--end:Menu heading-->
																			<!--begin:Menu item-->
																			<div id="chatbotContent">																		
																			</div>																			
																			<!--end:Menu item-->																			
																		</div>
																		<!--end:Menu section-->
																	</div>
																	<!--end:Col-->	
																	<!--begin:Col-->
																	<div class="col-lg-4 mb-6 mb-lg-0">
																		<!--begin:Menu section-->
																		<div class="mb-0">
																			<!--begin:Menu heading-->
																			<h4 class="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Facebook Marketing</h4>
																			<!--end:Menu heading-->
																			<!--begin:Menu item-->
																			<div id="FacebookMarketing">																		
																			</div>	
																			<!--end:Menu item-->
																		</div>
																		<!--end:Menu section-->
																	</div>
																	<!--end:Col-->
																	
																</div>
																<!--end:Row-->
															</div>
															<!--end:Col-->
															<!--begin:Col-->
															<div class="col-lg-4">
																<img src="http://tinkhuyenmai247.com/demo1/dist/assets/media/donate.png" class="rounded mw-100" alt="" />
															</div>
															<!--end:Col-->
														</div>
														<!--end:Row-->
													</div>
													<!--end:Tab pane-->
													<!--begin:Tab pane-->
													<div class="tab-pane w-lg-600px" id="kt_app_header_menu_pages_account">
														<!--begin:Row-->
														<div class="row">
															<!--begin:Col-->
															<div class="col-lg-5 mb-6 mb-lg-0">
																<!--begin:Row-->
																<div class="row">
																	<!--begin:Col-->
																	<div class="col-lg-6">
																		<!--begin:Menu item-->
																		<div class="menu-item p-0 m-0">
																			<!--begin:Menu link-->
																			<a href="https://shope.ee/1qCgPDhTqX"  target="_blank" class="menu-link">
																				<span class="menu-title">Thuật ngữ chuyên ngành</span>
																			</a>
																			<!--end:Menu link-->
																		</div>
																		<!--end:Menu item-->
																		<!--begin:Menu item-->
																		<div class="menu-item p-0 m-0">
																			<!--begin:Menu link-->
																			<a href="https://shope.ee/1qCgPDhTqX"  target="_blank" class="menu-link">
																				<span class="menu-title">Thông số facebook ADS</span>
																			</a>
																			<!--end:Menu link-->
																		</div>
																		<!--end:Menu item-->
																		
																	</div>
																	<!--end:Col-->
																	<!--begin:Col-->
																	<div class="col-lg-6">
																		<!--begin:Menu item-->
																		<div class="menu-item p-0 m-0">
																			<!--begin:Menu link-->
																			<a href="https://shope.ee/1qCgPDhTqX"  target="_blank" class="menu-link">
																				<span class="menu-title">Tổng hợp kiến thức</span>
																			</a>
																			<!--end:Menu link-->
																		</div>
																		<!--end:Menu item-->
																		
																	</div>
																	<!--end:Col-->
																</div>
																<!--end:Row-->
															</div>
															<!--end:Col-->
															<!--begin:Col-->
															<div class="col-lg-7">
																<img src="http://tinkhuyenmai247.com/demo1/dist/assets/media/donate900600.png" class="rounded mw-100" alt="" />
															</div>
															<!--end:Col-->
														</div>
														<!--end:Row-->
													</div>
													<!--end:Tab pane-->
													<!--begin:Tab pane-->
													<div class="tab-pane w-lg-1000px" id="kt_app_header_menu_pages_authentication">
														<!--begin:Row-->
														<div class="row">
															<!--begin:Col-->
															<div class="col-lg-3 mb-6 mb-lg-0">
																<!--begin:Menu section-->
																<div class="mb-6">
																	<!--begin:Menu heading-->
																	<h4 class="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Corporate Layout</h4>
																	<!--end:Menu heading-->
																	<!--begin:Menu item-->
																	<div class="menu-item p-0 m-0">
																		<!--begin:Menu link-->
																		<a href="https://shope.ee/1qCgPDhTqX"  target="_blank" class="menu-link">
																			<span class="menu-title">Sign-In</span>
																		</a>
																		<!--end:Menu link-->
																	</div>
																	<!--end:Menu item-->
																	<!--begin:Menu item-->
																	<div class="menu-item p-0 m-0">
																		<!--begin:Menu link-->
																		<a href="https://shope.ee/1qCgPDhTqX"  target="_blank" class="menu-link">
																			<span class="menu-title">Sign-Up</span>
																		</a>
																		<!--end:Menu link-->
																	</div>
																	<!--end:Menu item-->
																	<!--begin:Menu item-->
																	<div class="menu-item p-0 m-0">
																		<!--begin:Menu link-->
																		<a href="https://shope.ee/1qCgPDhTqX"  target="_blank" class="menu-link">
																			<span class="menu-title">Two-Factor</span>
																		</a>
																		<!--end:Menu link-->
																	</div>
																	<!--end:Menu item-->
																	<!--begin:Menu item-->
																	<div class="menu-item p-0 m-0">
																		<!--begin:Menu link-->
																		<a href="https://shope.ee/1qCgPDhTqX"  target="_blank" class="menu-link">
																			<span class="menu-title">Reset Password</span>
																		</a>
																		<!--end:Menu link-->
																	</div>
																	<!--end:Menu item-->
																	<!--begin:Menu item-->
																	<div class="menu-item p-0 m-0">
																		<!--begin:Menu link-->
																		<a href="https://shope.ee/1qCgPDhTqX"  target="_blank" class="menu-link">
																			<span class="menu-title">New Password</span>
																		</a>
																		<!--end:Menu link-->
																	</div>
																	<!--end:Menu item-->
																</div>
																<!--end:Menu section-->
																<!--begin:Menu section-->
																<div class="mb-0">
																	<!--begin:Menu heading-->
																	<h4 class="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Overlay Layout</h4>
																	<!--end:Menu heading-->
																	<!--begin:Menu item-->
																	<div class="menu-item p-0 m-0">
																		<!--begin:Menu link-->
																		<a href="https://shope.ee/1qCgPDhTqX"  target="_blank" class="menu-link">
																			<span class="menu-title">Sign-In</span>
																		</a>
																		<!--end:Menu link-->
																	</div>
																	<!--end:Menu item-->
																	<!--begin:Menu item-->
																	<div class="menu-item p-0 m-0">
																		<!--begin:Menu link-->
																		<a href="https://shope.ee/1qCgPDhTqX"  target="_blank" class="menu-link">
																			<span class="menu-title">Sign-Up</span>
																		</a>
																		<!--end:Menu link-->
																	</div>
																	<!--end:Menu item-->
																	<!--begin:Menu item-->
																	<div class="menu-item p-0 m-0">
																		<!--begin:Menu link-->
																		<a href="https://shope.ee/1qCgPDhTqX"  target="_blank" class="menu-link">
																			<span class="menu-title">Two-Factor</span>
																		</a>
																		<!--end:Menu link-->
																	</div>
																	<!--end:Menu item-->
																	<!--begin:Menu item-->
																	<div class="menu-item p-0 m-0">
																		<!--begin:Menu link-->
																		<a href="https://shope.ee/1qCgPDhTqX"  target="_blank" class="menu-link">
																			<span class="menu-title">Reset Password</span>
																		</a>
																		<!--end:Menu link-->
																	</div>
																	<!--end:Menu item-->
																	<!--begin:Menu item-->
																	<div class="menu-item p-0 m-0">
																		<!--begin:Menu link-->
																		<a href="https://shope.ee/1qCgPDhTqX"  target="_blank" class="menu-link">
																			<span class="menu-title">New Password</span>
																		</a>
																		<!--end:Menu link-->
																	</div>
																	<!--end:Menu item-->
																</div>
																<!--end:Menu section-->
															</div>
															<!--end:Col-->
															<!--begin:Col-->
															<div class="col-lg-3 mb-6 mb-lg-0">
																<!--begin:Menu section-->
																<div class="mb-6">
																	<!--begin:Menu heading-->
																	<h4 class="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Creative Layout</h4>
																	<!--end:Menu heading-->
																	<!--begin:Menu item-->
																	<div class="menu-item p-0 m-0">
																		<!--begin:Menu link-->
																		<a href="https://shope.ee/1qCgPDhTqX"  target="_blank" class="menu-link">
																			<span class="menu-title">Sign-in</span>
																		</a>
																		<!--end:Menu link-->
																	</div>
																	<!--end:Menu item-->
																	<!--begin:Menu item-->
																	<div class="menu-item p-0 m-0">
																		<!--begin:Menu link-->
																		<a href="https://shope.ee/1qCgPDhTqX"  target="_blank" class="menu-link">
																			<span class="menu-title">Sign-up</span>
																		</a>
																		<!--end:Menu link-->
																	</div>
																	<!--end:Menu item-->
																	<!--begin:Menu item-->
																	<div class="menu-item p-0 m-0">
																		<!--begin:Menu link-->
																		<a href="https://shope.ee/1qCgPDhTqX"  target="_blank" class="menu-link">
																			<span class="menu-title">Two-Factor</span>
																		</a>
																		<!--end:Menu link-->
																	</div>
																	<!--end:Menu item-->
																	<!--begin:Menu item-->
																	<div class="menu-item p-0 m-0">
																		<!--begin:Menu link-->
																		<a href="https://shope.ee/1qCgPDhTqX"  target="_blank" class="menu-link">
																			<span class="menu-title">Reset Password</span>
																		</a>
																		<!--end:Menu link-->
																	</div>
																	<!--end:Menu item-->
																	<!--begin:Menu item-->
																	<div class="menu-item p-0 m-0">
																		<!--begin:Menu link-->
																		<a href="https://shope.ee/1qCgPDhTqX"  target="_blank" class="menu-link">
																			<span class="menu-title">New Password</span>
																		</a>
																		<!--end:Menu link-->
																	</div>
																	<!--end:Menu item-->
																</div>
																<!--end:Menu section-->
																<!--begin:Menu section-->
																<div class="mb-6">
																	<!--begin:Menu heading-->
																	<h4 class="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Fancy Layout</h4>
																	<!--end:Menu heading-->
																	<!--begin:Menu item-->
																	<div class="menu-item p-0 m-0">
																		<!--begin:Menu link-->
																		<a href="https://shope.ee/1qCgPDhTqX"  target="_blank" class="menu-link">
																			<span class="menu-title">Sign-In</span>
																		</a>
																		<!--end:Menu link-->
																	</div>
																	<!--end:Menu item-->
																	<!--begin:Menu item-->
																	<div class="menu-item p-0 m-0">
																		<!--begin:Menu link-->
																		<a href="https://shope.ee/1qCgPDhTqX"  target="_blank" class="menu-link">
																			<span class="menu-title">Sign-Up</span>
																		</a>
																		<!--end:Menu link-->
																	</div>
																	<!--end:Menu item-->
																	<!--begin:Menu item-->
																	<div class="menu-item p-0 m-0">
																		<!--begin:Menu link-->
																		<a href="https://shope.ee/1qCgPDhTqX"  target="_blank" class="menu-link">
																			<span class="menu-title">Two-Factor</span>
																		</a>
																		<!--end:Menu link-->
																	</div>
																	<!--end:Menu item-->
																	<!--begin:Menu item-->
																	<div class="menu-item p-0 m-0">
																		<!--begin:Menu link-->
																		<a href="https://shope.ee/1qCgPDhTqX"  target="_blank" class="menu-link">
																			<span class="menu-title">Reset Password</span>
																		</a>
																		<!--end:Menu link-->
																	</div>
																	<!--end:Menu item-->
																	<!--begin:Menu item-->
																	<div class="menu-item p-0 m-0">
																		<!--begin:Menu link-->
																		<a href="https://shope.ee/1qCgPDhTqX"  target="_blank" class="menu-link">
																			<span class="menu-title">New Password</span>
																		</a>
																		<!--end:Menu link-->
																	</div>
																	<!--end:Menu item-->
																</div>
																<!--end:Menu section-->
															</div>
															<!--end:Col-->
															<!--begin:Col-->
															<div class="col-lg-3 mb-6 mb-lg-0">
																<!--begin:Menu section-->
																<div class="mb-0">
																	<!--begin:Menu heading-->
																	<h4 class="fs-6 fs-lg-4 fw-bold mb-3 ms-4">General</h4>
																	<!--end:Menu heading-->
																	<!--begin:Menu item-->
																	<div class="menu-item p-0 m-0">
																		<!--begin:Menu link-->
																		<a href="https://shope.ee/1qCgPDhTqX"  target="_blank" class="menu-link">
																			<span class="menu-title">Multi-Steps Sign-Up</span>
																		</a>
																		<!--end:Menu link-->
																	</div>
																	<!--end:Menu item-->
																	<!--begin:Menu item-->
																	<div class="menu-item p-0 m-0">
																		<!--begin:Menu link-->
																		<a href="https://shope.ee/1qCgPDhTqX"  target="_blank" class="menu-link">
																			<span class="menu-title">Welcome Message</span>
																		</a>
																		<!--end:Menu link-->
																	</div>
																	<!--end:Menu item-->
																	<!--begin:Menu item-->
																	<div class="menu-item p-0 m-0">
																		<!--begin:Menu link-->
																		<a href="https://shope.ee/1qCgPDhTqX"  target="_blank" class="menu-link">
																			<span class="menu-title">Verify Email</span>
																		</a>
																		<!--end:Menu link-->
																	</div>
																	<!--end:Menu item-->
																	<!--begin:Menu item-->
																	<div class="menu-item p-0 m-0">
																		<!--begin:Menu link-->
																		<a href="https://shope.ee/1qCgPDhTqX"  target="_blank" class="menu-link">
																			<span class="menu-title">Coming Soon</span>
																		</a>
																		<!--end:Menu link-->
																	</div>
																	<!--end:Menu item-->
																	<!--begin:Menu item-->
																	<div class="menu-item p-0 m-0">
																		<!--begin:Menu link-->
																		<a href="https://shope.ee/1qCgPDhTqX"  target="_blank" class="menu-link">
																			<span class="menu-title">Password Confirmation</span>
																		</a>
																		<!--end:Menu link-->
																	</div>
																	<!--end:Menu item-->
																	<!--begin:Menu item-->
																	<div class="menu-item p-0 m-0">
																		<!--begin:Menu link-->
																		<a href="https://shope.ee/1qCgPDhTqX"  target="_blank" class="menu-link">
																			<span class="menu-title">Account Deactivation</span>
																		</a>
																		<!--end:Menu link-->
																	</div>
																	<!--end:Menu item-->
																	<!--begin:Menu item-->
																	<div class="menu-item p-0 m-0">
																		<!--begin:Menu link-->
																		<a href="https://shope.ee/1qCgPDhTqX"  target="_blank" class="menu-link">
																			<span class="menu-title">Error 404</span>
																		</a>
																		<!--end:Menu link-->
																	</div>
																	<!--end:Menu item-->
																	<!--begin:Menu item-->
																	<div class="menu-item p-0 m-0">
																		<!--begin:Menu link-->
																		<a href="https://shope.ee/1qCgPDhTqX"  target="_blank" class="menu-link">
																			<span class="menu-title">Error 500</span>
																		</a>
																		<!--end:Menu link-->
																	</div>
																	<!--end:Menu item-->
																</div>
																<!--end:Menu section-->
															</div>
															<!--end:Col-->
															<!--begin:Col-->
															<div class="col-lg-3 mb-6 mb-lg-0">
																<!--begin:Menu section-->
																<div class="mb-0">
																	<!--begin:Menu heading-->
																	<h4 class="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Email Templates</h4>
																	<!--end:Menu heading-->
																	<!--begin:Menu item-->
																	<div class="menu-item p-0 m-0">
																		<!--begin:Menu link-->
																		<a href="https://shope.ee/1qCgPDhTqX"  target="_blank" class="menu-link">
																			<span class="menu-title">Welcome Message</span>
																		</a>
																		<!--end:Menu link-->
																	</div>
																	<!--end:Menu item-->
																	<!--begin:Menu item-->
																	<div class="menu-item p-0 m-0">
																		<!--begin:Menu link-->
																		<a href="https://shope.ee/1qCgPDhTqX"  target="_blank" class="menu-link">
																			<span class="menu-title">Reset Password</span>
																		</a>
																		<!--end:Menu link-->
																	</div>
																	<!--end:Menu item-->
																	<!--begin:Menu item-->
																	<div class="menu-item p-0 m-0">
																		<!--begin:Menu link-->
																		<a href="https://shope.ee/1qCgPDhTqX"  target="_blank" class="menu-link">
																			<span class="menu-title">Subscription Confirmed</span>
																		</a>
																		<!--end:Menu link-->
																	</div>
																	<!--end:Menu item-->
																	<!--begin:Menu item-->
																	<div class="menu-item p-0 m-0">
																		<!--begin:Menu link-->
																		<a href="https://shope.ee/1qCgPDhTqX"  target="_blank" class="menu-link">
																			<span class="menu-title">Credit Card Declined</span>
																		</a>
																		<!--end:Menu link-->
																	</div>
																	<!--end:Menu item-->
																	<!--begin:Menu item-->
																	<div class="menu-item p-0 m-0">
																		<!--begin:Menu link-->
																		<a href="https://shope.ee/1qCgPDhTqX"  target="_blank" class="menu-link">
																			<span class="menu-title">Promo 1</span>
																		</a>
																		<!--end:Menu link-->
																	</div>
																	<!--end:Menu item-->
																	<!--begin:Menu item-->
																	<div class="menu-item p-0 m-0">
																		<!--begin:Menu link-->
																		<a href="https://shope.ee/1qCgPDhTqX"  target="_blank" class="menu-link">
																			<span class="menu-title">Promo 2</span>
																		</a>
																		<!--end:Menu link-->
																	</div>
																	<!--end:Menu item-->
																	<!--begin:Menu item-->
																	<div class="menu-item p-0 m-0">
																		<!--begin:Menu link-->
																		<a href="https://shope.ee/1qCgPDhTqX"  target="_blank" class="menu-link">
																			<span class="menu-title">Promo 3</span>
																		</a>
																		<!--end:Menu link-->
																	</div>
																	<!--end:Menu item-->
																</div>
																<!--end:Menu section-->
															</div>
															<!--end:Col-->
														</div>
														<!--end:Row-->
													</div>
													<!--end:Tab pane-->
													<!--begin:Tab pane-->
													<div class="tab-pane w-lg-1000px" id="kt_app_header_menu_pages_utilities">
														<!--begin:Row-->
														<div class="row">
															<!--begin:Col-->
															<div class="col-lg-7">
																<!--begin:Row-->
																<div class="row">
																	<!--begin:Col-->
																	<div class="col-lg-4 mb-6 mb-lg-0">
																		<!--begin:Menu section-->
																		<div class="mb-0">
																			<!--begin:Menu heading-->
																			<h4 class="fs-6 fs-lg-4 fw-bold mb-3 ms-4">General Modals</h4>
																			<!--end:Menu heading-->
																			<!--begin:Menu item-->
																			<div class="menu-item p-0 m-0">
																				<!--begin:Menu link-->
																				<a href="https://shope.ee/1qCgPDhTqX"  target="_blank" class="menu-link">
																					<span class="menu-title">Invite Friends</span>
																				</a>
																				<!--end:Menu link-->
																			</div>
																			<!--end:Menu item-->
																			<!--begin:Menu item-->
																			<div class="menu-item p-0 m-0">
																				<!--begin:Menu link-->
																				<a href="https://shope.ee/1qCgPDhTqX"  target="_blank" class="menu-link">
																					<span class="menu-title">View Users</span>
																				</a>
																				<!--end:Menu link-->
																			</div>
																			<!--end:Menu item-->
																			<!--begin:Menu item-->
																			<div class="menu-item p-0 m-0">
																				<!--begin:Menu link-->
																				<a href="https://shope.ee/1qCgPDhTqX"  target="_blank" class="menu-link">
																					<span class="menu-title">Select Users</span>
																				</a>
																				<!--end:Menu link-->
																			</div>
																			<!--end:Menu item-->
																			<!--begin:Menu item-->
																			<div class="menu-item p-0 m-0">
																				<!--begin:Menu link-->
																				<a href="https://shope.ee/1qCgPDhTqX"  target="_blank" class="menu-link">
																					<span class="menu-title">Upgrade Plan</span>
																				</a>
																				<!--end:Menu link-->
																			</div>
																			<!--end:Menu item-->
																			<!--begin:Menu item-->
																			<div class="menu-item p-0 m-0">
																				<!--begin:Menu link-->
																				<a href="https://shope.ee/1qCgPDhTqX"  target="_blank" class="menu-link">
																					<span class="menu-title">Share & Earn</span>
																				</a>
																				<!--end:Menu link-->
																			</div>
																			<!--end:Menu item-->
																			<!--begin:Menu item-->
																			<div class="menu-item p-0 m-0">
																				<!--begin:Menu link-->
																				<a href="https://shope.ee/1qCgPDhTqX"  target="_blank" class="menu-link">
																					<span class="menu-title">New Target</span>
																				</a>
																				<!--end:Menu link-->
																			</div>
																			<!--end:Menu item-->
																			<!--begin:Menu item-->
																			<div class="menu-item p-0 m-0">
																				<!--begin:Menu link-->
																				<a href="https://shope.ee/1qCgPDhTqX"  target="_blank" class="menu-link">
																					<span class="menu-title">New Card</span>
																				</a>
																				<!--end:Menu link-->
																			</div>
																			<!--end:Menu item-->
																			<!--begin:Menu item-->
																			<div class="menu-item p-0 m-0">
																				<!--begin:Menu link-->
																				<a href="https://shope.ee/1qCgPDhTqX"  target="_blank" class="menu-link">
																					<span class="menu-title">New Address</span>
																				</a>
																				<!--end:Menu link-->
																			</div>
																			<!--end:Menu item-->
																			<!--begin:Menu item-->
																			<div class="menu-item p-0 m-0">
																				<!--begin:Menu link-->
																				<a href="https://shope.ee/1qCgPDhTqX"  target="_blank" class="menu-link">
																					<span class="menu-title">Create API Key</span>
																				</a>
																				<!--end:Menu link-->
																			</div>
																			<!--end:Menu item-->
																			<!--begin:Menu item-->
																			<div class="menu-item p-0 m-0">
																				<!--begin:Menu link-->
																				<a href="https://shope.ee/1qCgPDhTqX"  target="_blank" class="menu-link">
																					<span class="menu-title">Bidding</span>
																				</a>
																				<!--end:Menu link-->
																			</div>
																			<!--end:Menu item-->
																		</div>
																		<!--end:Menu section-->
																	</div>
																	<!--end:Col-->
																	<!--begin:Col-->
																	<div class="col-lg-4 mb-6 mb-lg-0">
																		<!--begin:Menu section-->
																		<div class="mb-6">
																			<!--begin:Menu heading-->
																			<h4 class="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Advanced Modals</h4>
																			<!--end:Menu heading-->
																			<!--begin:Menu item-->
																			<div class="menu-item p-0 m-0">
																				<!--begin:Menu link-->
																				<a href="https://shope.ee/1qCgPDhTqX"  target="_blank" class="menu-link">
																					<span class="menu-title">Create App</span>
																				</a>
																				<!--end:Menu link-->
																			</div>
																			<!--end:Menu item-->
																			<!--begin:Menu item-->
																			<div class="menu-item p-0 m-0">
																				<!--begin:Menu link-->
																				<a href="https://shope.ee/1qCgPDhTqX"  target="_blank" class="menu-link">
																					<span class="menu-title">Create Campaign</span>
																				</a>
																				<!--end:Menu link-->
																			</div>
																			<!--end:Menu item-->
																			<!--begin:Menu item-->
																			<div class="menu-item p-0 m-0">
																				<!--begin:Menu link-->
																				<a href="https://shope.ee/1qCgPDhTqX"  target="_blank" class="menu-link">
																					<span class="menu-title">Create Business Acc</span>
																				</a>
																				<!--end:Menu link-->
																			</div>
																			<!--end:Menu item-->
																			<!--begin:Menu item-->
																			<div class="menu-item p-0 m-0">
																				<!--begin:Menu link-->
																				<a href="https://shope.ee/1qCgPDhTqX"  target="_blank" class="menu-link">
																					<span class="menu-title">Create Project</span>
																				</a>
																				<!--end:Menu link-->
																			</div>
																			<!--end:Menu item-->
																			<!--begin:Menu item-->
																			<div class="menu-item p-0 m-0">
																				<!--begin:Menu link-->
																				<a href="https://shope.ee/1qCgPDhTqX"  target="_blank" class="menu-link">
																					<span class="menu-title">Top Up Wallet</span>
																				</a>
																				<!--end:Menu link-->
																			</div>
																			<!--end:Menu item-->
																			<!--begin:Menu item-->
																			<div class="menu-item p-0 m-0">
																				<!--begin:Menu link-->
																				<a href="https://shope.ee/1qCgPDhTqX"  target="_blank" class="menu-link">
																					<span class="menu-title">Offer a Deal</span>
																				</a>
																				<!--end:Menu link-->
																			</div>
																			<!--end:Menu item-->
																			<!--begin:Menu item-->
																			<div class="menu-item p-0 m-0">
																				<!--begin:Menu link-->
																				<a href="https://shope.ee/1qCgPDhTqX"  target="_blank" class="menu-link">
																					<span class="menu-title">Two Factor Auth</span>
																				</a>
																				<!--end:Menu link-->
																			</div>
																			<!--end:Menu item-->
																		</div>
																		<!--end:Menu section-->
																		<!--begin:Menu section-->
																		<div class="mb-0">
																			<!--begin:Menu heading-->
																			<h4 class="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Search</h4>
																			<!--end:Menu heading-->
																			<!--begin:Menu item-->
																			<div class="menu-item p-0 m-0">
																				<!--begin:Menu link-->
																				<a href="https://shope.ee/1qCgPDhTqX"  target="_blank" class="menu-link">
																					<span class="menu-title">Horizontal</span>
																				</a>
																				<!--end:Menu link-->
																			</div>
																			<!--end:Menu item-->
																			<!--begin:Menu item-->
																			<div class="menu-item p-0 m-0">
																				<!--begin:Menu link-->
																				<a href="https://shope.ee/1qCgPDhTqX"  target="_blank" class="menu-link">
																					<span class="menu-title">Vertical</span>
																				</a>
																				<!--end:Menu link-->
																			</div>
																			<!--end:Menu item-->
																			<!--begin:Menu item-->
																			<div class="menu-item p-0 m-0">
																				<!--begin:Menu link-->
																				<a href="https://shope.ee/1qCgPDhTqX"  target="_blank" class="menu-link">
																					<span class="menu-title">Users</span>
																				</a>
																				<!--end:Menu link-->
																			</div>
																			<!--end:Menu item-->
																			<!--begin:Menu item-->
																			<div class="menu-item p-0 m-0">
																				<!--begin:Menu link-->
																				<a href="https://shope.ee/1qCgPDhTqX"  target="_blank" class="menu-link">
																					<span class="menu-title">Select Location</span>
																				</a>
																				<!--end:Menu link-->
																			</div>
																			<!--end:Menu item-->
																		</div>
																		<!--end:Menu section-->
																	</div>
																	<!--end:Col-->
																	<!--begin:Col-->
																	<div class="col-lg-4 mb-6 mb-lg-0">
																		<!--begin:Menu section-->
																		<div class="mb-0">
																			<!--begin:Menu heading-->
																			<h4 class="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Wizards</h4>
																			<!--end:Menu heading-->
																			<!--begin:Menu item-->
																			<div class="menu-item p-0 m-0">
																				<!--begin:Menu link-->
																				<a href="https://shope.ee/1qCgPDhTqX"  target="_blank" class="menu-link">
																					<span class="menu-title">Horizontal</span>
																				</a>
																				<!--end:Menu link-->
																			</div>
																			<!--end:Menu item-->
																			<!--begin:Menu item-->
																			<div class="menu-item p-0 m-0">
																				<!--begin:Menu link-->
																				<a href="https://shope.ee/1qCgPDhTqX"  target="_blank" class="menu-link">
																					<span class="menu-title">Vertical</span>
																				</a>
																				<!--end:Menu link-->
																			</div>
																			<!--end:Menu item-->
																			<!--begin:Menu item-->
																			<div class="menu-item p-0 m-0">
																				<!--begin:Menu link-->
																				<a href="https://shope.ee/1qCgPDhTqX"  target="_blank" class="menu-link">
																					<span class="menu-title">Two Factor Auth</span>
																				</a>
																				<!--end:Menu link-->
																			</div>
																			<!--end:Menu item-->
																			<!--begin:Menu item-->
																			<div class="menu-item p-0 m-0">
																				<!--begin:Menu link-->
																				<a href="https://shope.ee/1qCgPDhTqX"  target="_blank" class="menu-link">
																					<span class="menu-title">Create App</span>
																				</a>
																				<!--end:Menu link-->
																			</div>
																			<!--end:Menu item-->
																			<!--begin:Menu item-->
																			<div class="menu-item p-0 m-0">
																				<!--begin:Menu link-->
																				<a href="https://shope.ee/1qCgPDhTqX"  target="_blank" class="menu-link">
																					<span class="menu-title">Create Campaign</span>
																				</a>
																				<!--end:Menu link-->
																			</div>
																			<!--end:Menu item-->
																			<!--begin:Menu item-->
																			<div class="menu-item p-0 m-0">
																				<!--begin:Menu link-->
																				<a href="https://shope.ee/1qCgPDhTqX"  target="_blank" class="menu-link">
																					<span class="menu-title">Create Account</span>
																				</a>
																				<!--end:Menu link-->
																			</div>
																			<!--end:Menu item-->
																			<!--begin:Menu item-->
																			<div class="menu-item p-0 m-0">
																				<!--begin:Menu link-->
																				<a href="https://shope.ee/1qCgPDhTqX"  target="_blank" class="menu-link">
																					<span class="menu-title">Create Project</span>
																				</a>
																				<!--end:Menu link-->
																			</div>
																			<!--end:Menu item-->
																			<!--begin:Menu item-->
																			<div class="menu-item p-0 m-0">
																				<!--begin:Menu link-->
																				<a href="https://shope.ee/1qCgPDhTqX"  target="_blank" class="menu-link">
																					<span class="menu-title">Top Up Wallet</span>
																				</a>
																				<!--end:Menu link-->
																			</div>
																			<!--end:Menu item-->
																			<!--begin:Menu item-->
																			<div class="menu-item p-0 m-0">
																				<!--begin:Menu link-->
																				<a href="https://shope.ee/1qCgPDhTqX"  target="_blank" class="menu-link">
																					<span class="menu-title">Offer a Deal</span>
																				</a>
																				<!--end:Menu link-->
																			</div>
																			<!--end:Menu item-->
																		</div>
																		<!--end:Menu section-->
																	</div>
																	<!--end:Col-->
																</div>
																<!--end:Row-->
															</div>
															<!--end:Col-->
															<!--begin:Col-->
															<div class="col-lg-5 pe-lg-5">
																<img src="http://tinkhuyenmai247.com/demo1/dist/assets/media/stock/600x600/img-84.jpg" class="rounded mw-100" alt="" />
															</div>
															<!--end:Col-->
														</div>
														<!--end:Row-->
													</div>
													<!--end:Tab pane-->
													<!--begin:Tab pane-->
													<div class="tab-pane w-lg-500px" id="kt_app_header_menu_pages_widgets">
														<!--begin:Row-->
														<div class="row">
															<!--begin:Col-->
															<div class="col-lg-4 mb-6 mb-lg-0">
																<!--begin:Menu item-->
																<div class="menu-item p-0 m-0">
																	<!--begin:Menu link-->
																	<a href="https://shope.ee/1qCgPDhTqX"  target="_blank" class="menu-link">
																		<span class="menu-title">Lists</span>
																	</a>
																	<!--end:Menu link-->
																</div>
																<!--end:Menu item-->
																<!--begin:Menu item-->
																<div class="menu-item p-0 m-0">
																	<!--begin:Menu link-->
																	<a href="https://shope.ee/1qCgPDhTqX"  target="_blank" class="menu-link">
																		<span class="menu-title">Statistics</span>
																	</a>
																	<!--end:Menu link-->
																</div>
																<!--end:Menu item-->
																<!--begin:Menu item-->
																<div class="menu-item p-0 m-0">
																	<!--begin:Menu link-->
																	<a href="https://shope.ee/1qCgPDhTqX"  target="_blank" class="menu-link">
																		<span class="menu-title">Charts</span>
																	</a>
																	<!--end:Menu link-->
																</div>
																<!--end:Menu item-->
																<!--begin:Menu item-->
																<div class="menu-item p-0 m-0">
																	<!--begin:Menu link-->
																	<a href="https://shope.ee/1qCgPDhTqX"  target="_blank" class="menu-link">
																		<span class="menu-title">Mixed</span>
																	</a>
																	<!--end:Menu link-->
																</div>
																<!--end:Menu item-->
																<!--begin:Menu item-->
																<div class="menu-item p-0 m-0">
																	<!--begin:Menu link-->
																	<a href="https://shope.ee/1qCgPDhTqX"  target="_blank" class="menu-link">
																		<span class="menu-title">Tables</span>
																	</a>
																	<!--end:Menu link-->
																</div>
																<!--end:Menu item-->
																<!--begin:Menu item-->
																<div class="menu-item p-0 m-0">
																	<!--begin:Menu link-->
																	<a href="https://shope.ee/1qCgPDhTqX"  target="_blank" class="menu-link">
																		<span class="menu-title">Feeds</span>
																	</a>
																	<!--end:Menu link-->
																</div>
																<!--end:Menu item-->
															</div>
															<!--end:Col-->
															<!--begin:Col-->
															<div class="col-lg-8">
																<img src="http://tinkhuyenmai247.com/demo1/dist/assets/media/stock/900x600/44.jpg" class="rounded mw-100" alt="" />
															</div>
															<!--end:Col-->
														</div>
														<!--end:Row-->
													</div>
													<!--end:Tab pane-->
												</div>
												<!--end:Tab content-->
											</div>
											<!--end:Pages menu-->
										</div>
										<!--end:Menu sub-->
									</div>
									<!--end:Menu item-->
									<!--begin:Menu item-->
									<div data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="bottom-start" class="menu-item menu-lg-down-accordion menu-sub-lg-down-indention me-0 me-lg-2">
										<!--begin:Menu link-->
										<span class="menu-link">
											<span class="menu-title">Youtube</span>
											<span class="menu-arrow d-lg-none"></span>
										</span>
										<!--end:Menu link-->
										<!--begin:Menu sub-->
										<div class="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown px-lg-2 py-lg-4 w-lg-250px">
											<!--begin:Menu item-->
											<div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" class="menu-item menu-lg-down-accordion">
												<!--begin:Menu link-->
												<span class="menu-link">
													<span class="menu-icon">
														<i class="ki-duotone ki-rocket fs-2">
															<span class="path1"></span>
															<span class="path2"></span>
														</i>
													</span>
													<span class="menu-title">SEO Youtube</span>
													<span class="menu-arrow"></span>
												</span>
												<!--end:Menu link-->
												<!--begin:Menu sub-->
												<div class="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
													<!--begin:Menu item-->
													<div class="menu-item">
														<!--begin:Menu link-->
														<a class="menu-link" href="https://tinkhuyenmai247.com/YTB/seoytb.html">
															<span class="menu-bullet">
																<span class="bullet bullet-dot"></span>
															</span>
															<span class="menu-title">SEO Video Youtube</span>
														</a>
														<!--end:Menu link-->
													</div>
													<!--end:Menu item-->													
												</div>
												<!--end:Menu sub-->
											</div>
											<!--end:Menu item-->
											
										</div>
										<!--end:Menu sub-->
									</div>
									<!--end:Menu item-->
									<!--begin:Menu item-->
									<div data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="bottom-start" class="menu-item menu-lg-down-accordion me-0 me-lg-2">
										<!--begin:Menu link-->
										<span class="menu-link">
											<span class="menu-title">Tiktok</span>
											<span class="menu-arrow d-lg-none"></span>
										</span>
										<!--end:Menu link-->
										<!--begin:Menu sub-->
										<div class="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown p-0 w-100 w-lg-900px w-xxl-950px">
											<!--begin:Dashboards menu-->
											<div class="menu-active-bg pt-1 pb-3 px-3 py-lg-6 px-lg-6" data-kt-menu-dismiss="true">
												<!--begin:Row-->
												<div class="row">
													<!--begin:Col-->
													<div class="col-lg-7">
														<!--begin:Row-->
														<div class="row">
															<!--begin:Col-->
															<div class="col-lg-4 mb-3">
																<!--begin:Heading-->
																<h4 class="fs-6 fs-lg-4 text-gray-800 fw-bold mt-3 mb-3 ms-4">Layouts</h4>
																<!--end:Heading-->
																<!--begin:Menu item-->
																<div class="menu-item p-0 m-0">
																	<!--begin:Menu link-->
																	<a href="https://shope.ee/1qCgPDhTqX"  target="_blank" class="menu-link">
																		<span class="menu-bullet">
																			<span class="bullet bullet-dot bg-gray-300i h-6px w-6px"></span>
																		</span>
																		<span class="menu-title">Light Sidebar</span>
																	</a>
																	<!--end:Menu link-->
																</div>
																<!--end:Menu item-->
																
															</div>
															<!--end:Col-->
															
														</div>
														<!--end:Row-->
														<div class="separator separator-dashed mx-lg-5 mt-2 mb-6"></div>
														<!--begin:Layout Builder-->
														<div class="d-flex flex-stack flex-wrap flex-lg-nowrap gap-2 mb-5 mb-lg-0 mx-lg-5">
															<div class="d-flex flex-column me-5">
																<div class="fs-6 fw-bold text-gray-800">Layout Builder</div>
																<div class="fs-7 fw-semibold text-muted">Customize, preview and export</div>
															</div>
															<a href="https://shope.ee/1qCgPDhTqX"  target="_blank" class="btn btn-sm btn-primary fw-bold">Try Builder</a>
														</div>
														<!--end:Layout Builder-->
													</div>
													<!--end:Col-->
													<!--begin:Col-->
													<div class="col-lg-5 mb-3 py-lg-3 pe-lg-8 d-flex align-items-center">
														<img src="http://tinkhuyenmai247.com/demo1/dist/assets/media/donate900600.png" class="rounded mw-100" alt="" />
													</div>
													<!--end:Col-->
												</div>
												<!--end:Row-->
											</div>
											<!--end:Dashboards menu-->
										</div>
										<!--end:Menu sub-->
									</div>
									<!--end:Menu item-->
									<!--begin:Menu item-->
									<div data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="bottom-start" class="menu-item menu-lg-down-accordion menu-sub-lg-down-indention me-0 me-lg-2">
										<!--begin:Menu link-->
										<span class="menu-link">
											<span class="menu-title">Ebook</span>
											<span class="menu-arrow d-lg-none"></span>
										</span>
										<!--end:Menu link-->
										<!--begin:Menu sub-->
										<div class="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown px-lg-2 py-lg-4 w-lg-200px">
											<!--begin:Menu item-->
											<div class="menu-item">
												<!--begin:Menu link-->
												<a class="menu-link" href="https://shope.ee/1qCgPDhTqX"  target="_blank" title="Check out over 200 in-house components, plugins and ready for use solutions" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss="click" data-bs-placement="right">
													<span class="menu-icon">
														<i class="ki-duotone ki-rocket fs-2">
															<span class="path1"></span>
															<span class="path2"></span>
														</i>
													</span>
													<span class="menu-title">Components</span>
												</a>
												<!--end:Menu link-->
											</div>
											<!--end:Menu item-->
											<!--begin:Menu item-->
											<div class="menu-item">
												<!--begin:Menu link-->
												<a class="menu-link" href="https://shope.ee/1qCgPDhTqX"  target="_blank" title="Check out the complete documentation" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss="click" data-bs-placement="right">
													<span class="menu-icon">
														<i class="ki-duotone ki-abstract-26 fs-2">
															<span class="path1"></span>
															<span class="path2"></span>
														</i>
													</span>
													<span class="menu-title">Documentation</span>
												</a>
												<!--end:Menu link-->
											</div>
											<!--end:Menu item-->
											<!--begin:Menu item-->
											<div class="menu-item">
												<!--begin:Menu link-->
												<a class="menu-link" href="https://shope.ee/1qCgPDhTqX"  target="_blank">
													<span class="menu-icon">
														<i class="ki-duotone ki-code fs-2">
															<span class="path1"></span>
															<span class="path2"></span>
															<span class="path3"></span>
															<span class="path4"></span>
														</i>
													</span>
													<span class="menu-title">Changelog v8.2.0</span>
												</a>
												<!--end:Menu link-->
											</div>
											<!--end:Menu item-->
										</div>
										<!--end:Menu sub-->
									</div>
									<!--end:Menu item-->
								</div>
								<!--end::Menu-->
        </div>
		<div class="app-navbar flex-shrink-0">
								
								<!--begin::Header menu toggle-->
								<div class="app-navbar-item d-lg-none ms-2 me-n2" title="Show header menu">
									<div class="btn btn-flex btn-icon btn-active-color-primary w-30px h-30px" id="kt_app_header_menu_toggle">
										<i class="ki-duotone ki-element-4 fs-1">
											<span class="path1"></span>
											<span class="path2"></span>
										</i>
									</div>
								</div>
								<!--end::Header menu toggle-->
								<!--begin::Aside toggle-->
								<!--end::Header menu toggle-->
							</div>
    `;

    // Chọn phần tử cha để chèn header vào
    const parentElement = document.querySelector('#kt_app_header_wrapper'); // Thay '#header-container' bằng id của phần tử cha bạn muốn chèn header vào

    // Thêm header vào phần tử cha
    parentElement.innerHTML = headerHTML;
}

// Gọi hàm displayHeader() khi cần hiển thị header, ví dụ sau khi trang web tải hoặc ở mọi trang
displayHeader();
function displayFooter() {
    const headerHTML = 
        `
		<!--begin::Footer container-->
							<div class="app-container container-fluid d-flex flex-column flex-md-row flex-center flex-md-stack py-3">
								<!--begin::Copyright-->
								<div class="text-dark order-2 order-md-1">
									<span class="text-muted fw-semibold me-1">2023&copy;</span>
									<a href="https://shope.ee/1qCgPDhTqX"  target="_blank" class="text-gray-800 text-hover-primary">TinKhuyenMai247</a>
								</div>
								<!--end::Copyright-->
								<!--begin::Menu-->
								<ul class="menu menu-gray-600 menu-hover-primary fw-semibold order-1">
									<li class="menu-item">
										<a href="http://tinkhuyenmai247.com/" target="_blank" class="menu-link px-2">About</a>
									</li>
									<li class="menu-item">
										<a href="https://www.facebook.com/bantinkhuyenmai247" target="_blank" class="menu-link px-2">Facebook</a>
									</li>
									<li class="menu-item">
										<a href="https://www.youtube.com/@TaiChinh360/playlists" target="_blank" class="menu-link px-2">Youtube</a>
									</li>
								</ul>
								<!--end::Menu-->
							</div>
							<!--end::Footer container-->
		`;

    // Chọn phần tử cha để chèn header vào
    const parentElement = document.querySelector('#kt_app_footer'); // Thay '#header-container' bằng id của phần tử cha bạn muốn chèn header vào

    // Thêm header vào phần tử cha
    parentElement.innerHTML = headerHTML;
}
displayFooter();

function openTwoLinks() {
    var link1 = "https://shope.ee/1qCgPDhTqX";
    var link2 = "https://www.youtube.com/@TaiChinh360/playlists";

    // Hỏi người dùng với hộp thoại cảnh báo
    var confirmation = confirm("Xem tài liệu?");

    // Nếu người dùng đồng ý, chuyển tab hiện tại sang link2
    if (confirmation) {
        window.location.href = link2;
    } else {
        // Nếu người dùng không đồng ý, mở tab mới cho link1
        var newTab1 = window.open(link1, '_blank');
    }
}
function renderAds(data) {
    // Loop through the 'data' array to create HTML elements
    data.forEach((row) => {
        // Get the container ID from row[4]
        const containerId = row[4];
        
        // Create container dynamically
        let container = document.getElementById(containerId);
        if (!container) {
            // If container doesn't exist, create a new one
            container = document.createElement('div');
            container.id = containerId;
            document.body.appendChild(container); // You can append it to a different parent if needed
        }

        let div = document.createElement('div');
        div.classList.add('menu-item', 'p-0', 'm-0');

        let anchor = document.createElement('a');
        anchor.setAttribute('href', row[2]);
        anchor.setAttribute('target', '_blank');
        anchor.classList.add('menu-link');

        let span = document.createElement('span');
        span.classList.add('menu-title');
        span.textContent = row[0];

        anchor.appendChild(span);
        div.appendChild(anchor);
        container.appendChild(div);
    });
}
	
  