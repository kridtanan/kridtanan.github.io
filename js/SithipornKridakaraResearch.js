var panorama, panorama_video, viewer, container, infospot;

container = document.querySelector( '#container' );
chgLang = document.querySelector('#toggle-event')
pp = document.querySelector('#pp')
panel1 = document.querySelector('#panel1');
panel2 = document.querySelector('#panel2');
panel3 = document.querySelector('#panel3');
panel4 = document.querySelector('#panel4');
panel5 = document.querySelector('#panel5');
panel6 = document.querySelector('#panel6');
panel7 = document.querySelector('#panel7');
panel8 = document.querySelector('#panel8');
panel9 = document.querySelector('#panel9');
panel10 = document.querySelector('#panel10');

panorama = new PANOLENS.ImagePanorama( '../asset/textures/equirectangular/SithipornKridakaraResearch/0/GPBK0507.jpg' )

panorama1 = new PANOLENS.ImagePanorama('../asset/textures/equirectangular/panga3.jpg');

panorama2 = new PANOLENS.ImagePanorama('../asset/textures/equirectangular/panga4.jpg');

var invocation = new XMLHttpRequest();

var url = 'http://bar.other/resources/post-here/';
var body = '<?xml version="1.0"?><person><name>Arun</name></person>';

/* panorama.crossOrigin = '';
panorama.crossOrigin = this.crossOrigin !== undefined ? this.crossOrigin : ''; */
THREE.ImageUtils.crossOrigin = "*";
    



/* panorama_video = new PANOLENS.VideoPanorama( 'https://pchen66.github.io/Panolens/examples/asset/textures/video/1941-battle-low.mp4' ); */

/* ลิ้งไปหน้าอื่น */
/* panorama.link( panorama1, new THREE.Vector3(126.94, 1312.17, 4814.32) );
panorama1.link( panorama, new THREE.Vector3(5900, 1312.17, 1000) );
panorama.link( panorama2, new THREE.Vector3(5900, 1312.17, 1000) ); */
/* panorama_video.link( panorama, new THREE.Vector3(4608.48, 1889.67, -375.46) ); */


/*1 ที่ตั้ง */
infospot1 = new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info );
infospot1.position.set(4754.14, 1515.02, -183.48);
infospot1.addHoverElement( panel1, 350 );

/* 2จุดชมวิว */
infospot2 = new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info );
infospot2.position.set(3382.31, 1866.75, -3165.86);
infospot2.addHoverElement( panel2, 300 );

/*4 ประวัติ */
infospot3 = new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info );
infospot3.position.set(3846.40, -1050.37, 3001.95);
infospot3.addHoverElement( panel4, 400 );

/* 3วัตถุประสงค์ */
infospot4 = new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info );
infospot4.position.set(4212.58, 1941.74, 1861.90);
infospot4.addHoverElement( panel3, 350 );

/* 5องค์ความรู้ */
infospot5 = new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info );
infospot5.position.set(-3111.52, 881.80, 3800.75);
infospot5.addHoverElement( panel5, 400 );

/*6ผลิตภัณฑ์ */
infospot6 = new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info );
infospot6.position.set(2002.39, 1113.77, 4440.75);
infospot6.addHoverElement( panel6, 380 );

/* 7ข้อมูลการท่องเที่ยว */
infospot7 = new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info );
infospot7.position.set(4851.29, -1106.20, -433.16);
infospot7.addHoverElement( panel7, 330 );

/* 8การบริการชุมชน */
infospot8 = new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info );
infospot8.position.set(4009.00, 2946.58, 472.24);
infospot8.addHoverElement( panel8, 200 );

/* 9ความร่วมมือกับท้องถิ่น */
/* infospot9 = new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info );
infospot9.position.set(-1284.72, 1078.65, -4700.44);
infospot9.addHoverElement( panel9, 120 ); */

/* 10แหล่ง้รียนรู้ */
infospot10 = new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info );
infospot10.position.set(1936.61, 1878.06, -4205.23);
infospot10.addHoverElement( panel10, 380 );



panorama.add( infospot1,infospot2,infospot3,infospot4,infospot5,infospot6,infospot7,infospot8 ,infospot10);

viewer = new PANOLENS.Viewer( { container: container, output: 'console',chgLang,pp } );
viewer.add(panorama,panorama1,panorama2);




var controlLanguageThai = {
  style: {
    backgroundImage: 'url(https://icon-library.com/images/th-icon/th-icon-1.jpg)'
  },
  
  onTap: function(){
    document.body.className = $(this).data($(this).toString());
    if (document.body.className = 'th') {
      document.body.className.hidden = 'false'
    }
}
};
viewer.appendControlItem(controlLanguageThai);


var controlLanguageEng = {
  style: {
    backgroundImage: 'url(https://www.carrentkrabi.com/en/wp-content/uploads/2018/10/icon_en.png)'
  },
  
  onTap: function(){
         document.body.className = $(this).data($(this).toString());
         if (document.body.className = 'en') {
           document.body.className.hidden = 'false'
         }
        
         
  }
};
viewer.appendControlItem(controlLanguageEng);