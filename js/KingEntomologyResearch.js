var panorama, panorama_video, viewer, container, infospot;

container = document.querySelector( '#container' );
chgLang = document.querySelector('#toggle-event')
pp = document.querySelector('#pp')
panel1 = document.querySelector('#panel1');
panel2 = document.querySelector('#panel2');
panel3 = document.querySelector('#panel3');
panel4 = document.querySelector('#panel4');
panel5 = document.querySelector('#panel5');
panel55 = document.querySelector('#panel55');
panel6 = document.querySelector('#panel6');
panel7 = document.querySelector('#panel7');
panel8 = document.querySelector('#panel8');
panel9 = document.querySelector('#panel9');
panel10 = document.querySelector('#panel10');

panorama = new PANOLENS.ImagePanorama( '../asset/textures/equirectangular/KingEntomologyResearch/0/gpbk0104_optimized.jpg' )

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
infospot1.position.set(3452.47, 2594.41, -2517.64);
infospot1.addHoverElement( panel1, 350 );

/* 2จุดชมวิว */
infospot2 = new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info );
infospot2.position.set(-1396.91, 2217.18, 4255.25);
infospot2.addHoverElement( panel2, 200 );

/*4 ประวัติ */
infospot3 = new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info );
infospot3.position.set(4872.61, 1007.78, -399.88);
infospot3.addHoverElement( panel4, 250 );

/* 3วัตถุประสงค์ */
infospot4 = new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info );
infospot4.position.set(1149.00, 1172.27, -4717.12);
infospot4.addHoverElement( panel3, 400 );

/* 5องค์ความรู้ */
infospot5 = new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info );
infospot5.position.set(-3364.64, -652.23, 3631.52);
infospot5.addHoverElement( panel5, 350 );

/* 55 */
infospot55 = new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info );
infospot55.position.set(-4675.23, 299.23, 1720.86);
infospot55.addHoverElement( panel55, 220 );

/*6ผลิตภัณฑ์ */
infospot6 = new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info );
infospot6.position.set(-1088.07, 324.61, -4864.55);
infospot6.addHoverElement( panel6, 300 );

/* 7ข้อมูลการท่องเที่ยว */
infospot7 = new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info );
infospot7.position.set(1649.97, 1867.99, 4325.83);
infospot7.addHoverElement( panel7, 150 );

/* 8การบริการชุมชน */
infospot8 = new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info );
infospot8.position.set(855.13, -1470.77, 4693.71);
infospot8.addHoverElement( panel8, 200 );

/* 9ความร่วมมือกับท้องถิ่น */
/* infospot9 = new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info );
infospot9.position.set(4688.90, 211.93, 1694.81);
infospot9.addHoverElement( panel9, 100 ); */

/* 10แหล่ง้รียนรู้ */
infospot10 = new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info );
infospot10.position.set(-4751.40, -102.45, -1543.98);
infospot10.addHoverElement( panel10, 350 );



panorama.add( infospot1,infospot2,infospot3,infospot4,infospot5,infospot55,infospot6,infospot7,infospot8 ,infospot10);

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