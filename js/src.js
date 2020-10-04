var panorama, panorama_video, viewer, container, infospot ,panel ,panel2;

container = document.querySelector( '#container' );
chgLang = document.querySelector('#toggle-event')
pp = document.querySelector('#pp')
panel = document.querySelector('#panel');
panel2 = document.querySelector('#panel2');

panorama = new PANOLENS.ImagePanorama( '../asset/textures/equirectangular/panga1.JPG' );

panorama1 = new PANOLENS.ImagePanorama('../asset/textures/equirectangular/panga3.JPG');

panorama2 = new PANOLENS.ImagePanorama('../asset/textures/equirectangular/panga4.JPG');

panorama_video = new PANOLENS.VideoPanorama( 'https://pchen66.github.io/Panolens/examples/asset/textures/video/1941-battle-low.mp4' );

panorama.link( panorama1, new THREE.Vector3(126.94, 1312.17, 4814.32) );
panorama1.link( panorama, new THREE.Vector3(5900, 1312.17, 1000) );
panorama.link( panorama2, new THREE.Vector3(5900, 1312.17, 1000) );
panorama_video.link( panorama, new THREE.Vector3(4608.48, 1889.67, -375.46) );

infospot = new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info );
infospot.position.set(3508.49, 1707.05, 3118.43);
infospot.addHoverElement( panel, 200 );

infospot2 = new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info );
infospot2.position.set(-327.21, -380.48, -4967.90);
infospot2.addHoverElement( panel2, 200 );

panorama.add( infospot,infospot2);

viewer = new PANOLENS.Viewer( { container: container, output: 'console',chgLang,pp } );
viewer.add( panorama, panorama_video,panorama1,panorama2);

// Cube custom item
/* var cube = new THREE.Mesh(new THREE.BoxGeometry(100, 100, 100), new THREE.MeshNormalMaterial());
cube.position.set(-300, 100, 100);
viewer.addUpdateCallback(function(){
  cube.rotation.y += 0.05;
  cube.rotation.x += 0.02;
});
panorama.add( cube ); */

/* var controlItemCube = {
  style: {
    backgroundImage: 'url(http://i40.tinypic.com/1531w79.jpg)'
  },
  
  onTap: function(){
    viewer.tweenControlCenterByObject( cube );
  }
};
viewer.appendControlItem(controlItemCube); */

// Wonder women custom item
/* var posterInfospot = new PANOLENS.Infospot(2000, 'https://images-na.ssl-images-amazon.com/images/I/91nELBuo3kL._RI_SX200_.jpg');
posterInfospot.position.set(-4774.9, 474.16, -1375.02);
panorama.add(posterInfospot); */

/* var controlItemPoster = {
  style: {
    backgroundImage: 'url(https://images-na.ssl-images-amazon.com/images/I/31DcBWmTrNL._CR0,25,201,201.jpg)',
    float: 'left'
  },
  
  onTap: function(){
    posterInfospot.focus();
  }
};
viewer.appendControlItem(controlItemPoster); */


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