/* ========================================
   Mateo M. Rodriguez - Inmobiliaria
   JavaScript Principal (DEPURADO)
======================================== */

document.addEventListener('DOMContentLoaded', function () {

    // ========================================
    // Navbar Scroll Effect
    // ========================================
    const navbar = document.querySelector('.navbar-custom');

    function handleScroll() {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    // Close mobile nav on link click
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarCollapse = document.getElementById('navbarNav');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse?.classList.contains('show')) {
                new bootstrap.Collapse(navbarCollapse).hide();
            }
        });
    });

    // ========================================
    // Gallery System
    // ========================================
    const galleryGrid = document.getElementById('galleryGrid');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const filterBtns = document.querySelectorAll('.filter-btn');

    let displayedItems = 0;
    const itemsPerLoad = 12;
    let filteredData = [];

    function initGallery() {
        filteredData = [...galleryData];
        displayedItems = 0;
        galleryGrid.innerHTML = '';
        loadMoreItems();
    }

    function loadMoreItems() {
        const itemsToLoad = filteredData.slice(displayedItems, displayedItems + itemsPerLoad);

        itemsToLoad.forEach((item, index) => {
            const galleryItem = createGalleryItem(item, displayedItems + index);
            galleryGrid.appendChild(galleryItem);

            setTimeout(() => {
                galleryItem.style.opacity = '1';
                galleryItem.style.transform = 'translateY(0)';
            }, index * 50);
        });

        displayedItems += itemsToLoad.length;
        loadMoreBtn.style.display = displayedItems >= filteredData.length ? 'none' : 'inline-flex';
    }

    function createGalleryItem(item, index) {
        const div = document.createElement('div');
        div.className = `gallery-item ${item.isVideo ? 'video-item' : ''}`;
        div.dataset.category = item.category;
        div.dataset.index = index;

        div.style.opacity = '0';
        div.style.transform = 'translateY(20px)';
        div.style.transition = 'opacity 0.4s ease, transform 0.4s ease';

        div.innerHTML = item.isVideo ? `
            <img src="${item.poster || 'images/video-placeholder.jpg'}" alt="${item.title}">
            <div class="gallery-overlay"><h5>${item.title}</h5></div>
            <div class="gallery-icon"><i class="bi bi-play-fill"></i></div>
        ` : `
            <img src="${item.src}" alt="${item.title}" loading="lazy">
            <div class="gallery-overlay"><h5>${item.title}</h5></div>
            <div class="gallery-icon"><i class="bi bi-zoom-in"></i></div>
        `;

        div.addEventListener('click', () => openLightbox(item, index));
        return div;
    }

    function filterGallery(category) {
        filteredData = category === 'all'
            ? [...galleryData]
            : galleryData.filter(item => item.category === category);

        displayedItems = 0;
        galleryGrid.innerHTML = '';
        loadMoreItems();
    }

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterGallery(btn.dataset.filter);
        });
    });

    loadMoreBtn?.addEventListener('click', loadMoreItems);

    if (typeof galleryData !== 'undefined') initGallery();

    // ========================================
    // Lightbox System
    // ========================================
    const lightboxModal = document.getElementById('lightboxModal');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const lightboxCounter = document.getElementById('lightboxCounter');

    let currentLightboxIndex = 0;

    function openLightbox(item, index) {
        currentLightboxIndex = index;
        const content = lightboxModal.querySelector('.lightbox-content');

        content.querySelector('video')?.remove();

        if (item.isVideo) {
            lightboxImg.style.display = 'none';

            const video = document.createElement('video');
            video.controls = true;
            video.autoplay = true;
            video.style.maxWidth = '100%';
            video.style.maxHeight = '80vh';

            video.innerHTML = `<source src="${item.src}" type="video/mp4">`;
            content.appendChild(video);
        } else {
            lightboxImg.src = item.src;
            lightboxImg.style.display = 'block';
        }

        lightboxCaption.textContent = item.title;
        lightboxCounter.textContent = `${index + 1} / ${filteredData.length}`;
        lightboxModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeLightboxModal() {
        lightboxModal.classList.remove('active');
        document.body.style.overflow = '';
        lightboxModal.querySelector('video')?.remove();
        lightboxImg.style.display = 'block';
    }

    function navigateLightbox(dir) {
        currentLightboxIndex = (currentLightboxIndex + dir + filteredData.length) % filteredData.length;
        openLightbox(filteredData[currentLightboxIndex], currentLightboxIndex);
    }

    document.getElementById('closeLightbox')?.addEventListener('click', closeLightboxModal);
    document.getElementById('prevImage')?.addEventListener('click', () => navigateLightbox(-1));
    document.getElementById('nextImage')?.addEventListener('click', () => navigateLightbox(1));

    lightboxModal?.addEventListener('click', e => {
        if (e.target === lightboxModal) closeLightboxModal();
    });

    document.addEventListener('keydown', e => {
        if (!lightboxModal?.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightboxModal();
        if (e.key === 'ArrowLeft') navigateLightbox(-1);
        if (e.key === 'ArrowRight') navigateLightbox(1);
    });

    // ========================================
    // Lazy Load Google Maps
    // ========================================
    const mapContainer = document.getElementById('mapContainer');

    if (mapContainer) {
        let mapLoaded = false;

        const loadMap = () => {
            if (mapLoaded) return;
            mapLoaded = true;

            mapContainer.innerHTML = `
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3730.968890315981!2d-103.43557892475093!3d20.752054980828945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDQ1JzA3LjQiTiAxMDPCsDI1JzU4LjgiVw!5e0!3m2!1ses-419!2smx!4v1770059275254!5m2!1ses-419!2smx"
                    width="100%"
                    height="400"
                    style="border:0; border-radius:16px;"
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    fetchpriority="low"
                    allowfullscreen>
                </iframe>
            `;
        };

        new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                loadMap();
            }
        }, { threshold: 0.2 }).observe(mapContainer);

        mapContainer.addEventListener('click', loadMap);
    }

    // ========================================
    // Image Error Handler
    // ========================================
    document.addEventListener('error', e => {
        if (e.target.tagName === 'IMG') {
            e.target.src =
                'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2Y1ZjVmNSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmaWxsPSIjOTk5IiBmb250LXNpemU9IjE2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5JbWFnZW4gbm8gZGlzcG9uaWJsZTwvdGV4dD48L3N2Zz4=';
            e.target.alt = 'Imagen no disponible';
        }
    }, true);

});
