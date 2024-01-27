$(".album-poster").on('click', function (e) {
    var dataSwitchId = $(this).attr('data-switch');
    ap.list.switch(dataSwitchId);
    ap.play();
    $("#aplayer").addClass('showPlayer');
});

const ap = new APlayer({
    container: document.getElementById('aplayer'),
    listFolded: true,
    audio: [
        {
            name: 'Chaleya',
            artist: 'Arijit S, Shilpa R',
            url: 'C:\Users\NEETU\Downloads\Chaleya(PagalWorld.com.pe).mp3',
            cover: 'chaleya.jpg'
        }, {
            name: 'Ram Sita Ram',
            artist: 'Sachet-Parampara, Ramajogayya',
            url: 'Songs/Ram Siya Ram.mp3',
            cover: 'ram sita ram.jpg'
        }, {
            name: 'Ghungroo',
            artist: 'Vishal & Shekhar, Kumaar',
            url: 'https://youtu.be/qFkNATtc3mc?si=ZKcGlVcW3Woo8IvK.mp3',
            cover: 'Ghungroo.jpg'
        }, {
            name: 'Jamal Kudu',
            artist: 'Sandeep Vanga,Bhushan K',
            url: 'https://youtu.be/oRGhqUjWF6U?si=wPi0IDF0p5n3JPBr.mp3',
            cover: 'jamal kudu.jpg'
        }, {
            name: 'Gulabi Aankhen',
            artist: 'Sanam',
            url: 'https://youtu.be/hgi2MYAFgE8?si=3soS7mdr2V8iDxWx.mp3',
            cover: 'Gulabi ankhen.jpg'
        }, {
            name: 'What Jhumka?',
            artist: 'Arijit,Jonita',
            url: 'https://youtu.be/87JIOAX3njM?si=7WgfE-PBhDfWD-Hl.mp3',
            cover: 'what jhumka.jpg'
        }, {
            name: 'Pinga',
            artist: 'Shreya Ghoshal',
            url: 'https://youtu.be/tzRFLMn4kpM?si=EnmmXMoPMrlWWmhh.mp3',
            cover: 'pinga.jpg'
        }, {
            name: 'Deva-Deva',
            artist: 'Amitabh Bhattacharya, Arijit Singh, Jonita Gandhi, Pritam',
            url: 'https://youtu.be/mNuhKUOD_A0?si=FcceCH20gKRpfTkQ.mp3',
            cover: 'deva deva.jpg'
        }, {
            name: 'Bijlee Bijlee',
            artist: 'Harrdy Sandhu,BPraak',
            url: 'https://youtu.be/NwdQx2P_ytk?si=hbsINOmEj2wM4FHt.mp3',
            cover: 'bijlee.jpg'
        }, {
            name: 'Jehda Nasha',
            artist: 'Tanishk Faridkot Amar IP Singh,Yohani,Harjot',
            url: 'https://youtu.be/6zf2dNLS-fs?si=QPzcSw9YSIWWHF0J.mp3',
            cover: 'jehda nasha.jpg'
        }, {
            name: 'Kalaastar',
            artist: 'Yo Yo Honey Singh',
            url: 'https://youtu.be/5oExKMYIE9U?si=fkECF_jis0U24Esq.mp3',
            cover: 'kalaastar.jpg'
        }, {
            name: 'Har Funn Maula',
            artist: 'Vishal D,Zara K,Tanishk B,Amitabh B',
            url: 'https://youtu.be/94o73K5T0MQ?si=l63oPKRgPr13ahN3.mp3',
            cover: 'har fun maula.jpg'
        }, {
            name: 'Gone Girl',
            artist: 'Badshah,Payal Dev',
            url: 'https://youtu.be/mvCWGL_r-Zg?si=25fX2qSDHuvX-8rP.mp3',
            cover: 'gone girl.jpg'
        },{
            name: 'Hiriye',
            artist: 'Aditi Sharma,Arijit Singh',
            url: 'C:\Users\NEETU\Downloads128-Heeriye (feat. Arijit Singh) - Dulquer Salmaan 128 Kbps.mp3',
            cover: 'Hiriye.jpg'
        },{
            name: 'Bad Boy Bad Girl',
            artist: 'Badshah,Nikhita Gandhi',
            url: 'https://youtu.be/9v5-9ovoTGE?si=n7OHFTqPUH9Ggr-E.mp3',
            cover: 'bad boy bad girl.jpg'
        },{
            name: 'Bolera',
            artist: 'Preetinder, Asees Kaur, Rajat Nagpal, Babbu, Anshul Garg',
            url: 'https://youtu.be/JRU8WHomWWE?si=yDPak62q7B7r_s3H.mp3',
            cover: 'bolera.jpg'
        } ]
});
