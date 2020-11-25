var panorama, panorama_video, viewer, container, infospot;

container = document.querySelector( '#container' );
chgLang = document.querySelector('#toggle-event')
pp = document.querySelector('#pp')
panel1 = document.querySelector('#panel1');
panel2 = document.querySelector('#panel2');
panel3 = document.querySelector('#panel3');
panel4 = document.querySelector('#panel4');
panel55 = document.querySelector('#panel5');
panel5 = document.querySelector('#panel55');
panel6 = document.querySelector('#panel6');
panel7 = document.querySelector('#panel7');
panel8 = document.querySelector('#panel8');
panel9 = document.querySelector('#panel9');
panel10 = document.querySelector('#panel10');

const panorama5 = new PANOLENS.ImagePanorama( '../asset/textures/equirectangular/PhetchabunResearch/0/gpfr0839_optimized.JPG' )

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
infospot1.position.set(4640.83, 367.27, 1803.03);
infospot1.addHoverElement( panel1, 380 );

/* 2จุดชมวิว */
infospot2 = new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info );
infospot2.position.set(-2963.06, -746.10, -3951.93);
infospot2.addHoverElement( panel2, 300 );

/*4 ประวัติ */
infospot3 = new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info );
infospot3.position.set(4415.99, -2313.68, -277.71);
infospot3.addHoverElement( panel4, 150 );

/* 3วัตถุประสงค์ */
infospot4 = new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info );
infospot4.position.set(4016.60, 406.33, -2947.01);
infospot4.addHoverElement( panel3, 350 );

/* 55องค์ความรู้ */
infospot55 = new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info );
infospot55.position.set(-4552.65, -378.36, -2030.58);
infospot55.addHoverElement( panel55, 400 );

/* 5 picture*/ 
infospot5 = new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info );
infospot5.position.set(-2126.76, 1737.41, -4166.50);
infospot5.addHoverElement( panel5, 200 );

/*6ผลิตภัณฑ์ */
infospot6 = new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info );
infospot6.position.set(2367.35, 508.51, 4365.02);
infospot6.addHoverElement( panel6, 300 );

/* 7ข้อมูลการท่องเที่ยว */
infospot7 = new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info );
infospot7.position.set(1575.25, -2048.70, -4269.87);
infospot7.addHoverElement( panel7, 350 );

/* 8การบริการชุมชน */
infospot8 = new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info );
infospot8.position.set(-4063.72, -2101.81, -1994.62);
infospot8.addHoverElement( panel8, 150 );

/* 9ความร่วมมือกับท้องถิ่น */
/* infospot9 = new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info );
infospot9.position.set(-1279.60, -2306.44, -4241.88);
infospot9.addHoverElement( panel9, 120 ); */

/* 10แหล่ง้รียนรู้ */
infospot10 = new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info );
infospot10.position.set(-1747.59, 436.03, 4655.52);
infospot10.addHoverElement( panel10, 350 );



panorama5.add( infospot1,infospot2,infospot3,infospot4,infospot5,infospot55,infospot6,infospot7,infospot8 ,infospot10);

viewer = new PANOLENS.Viewer( { container: container, output: 'console',chgLang,pp } );
viewer.add(panorama5);




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