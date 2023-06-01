const fakeData = [
  {
    name: 'Công ty Sen Vàng Solution',
    address: 'Số 22 Hoàng Diệu Quận 4 Tp.HCM',
    image:
      'https://tea-3.lozi.vn/v1/images/resized/tiem-banh-piza-bin-bin-quan-binh-tan-ho-chi-minh-1637132123870779974-eatery-avatar-1637662887?w=640&type=s',
    content: 'Khuyến mãi 50% cho thành viên',
    description:
      'Lorem ipsum dolor sit amet, et nam pertinax gloriatur. Sea te minim soleat senserit, ex quo luptatum tacimates voluptatum, salutandidelicatissimi eam ea. In sed nullam laboramus appellantur, mei eiomnis dolorem mnesarchum. Lorem ipsum dolor sit amet, et nampertinax gloriatur. Sea te minim soleat senserit, ex quo luptatumtacimates voluptatum, salutandi delicatissimi eam ea. In sed nullamlaboramus appellantur, mei ei omnis dolorem mnesarchum.',
    urlOrder: 'https://demo.delimall.vn/nha-hang/1059-pizzahut-1',
  },
  {
    name: 'Chi nhánh 1 zone 1',
    address: 'Số 22 Hoàng Diệu Quận 4 Tp.HCM',
    image: 'https://i.ytimg.com/vi/2DZT0ZK_kzY/maxresdefault.jpg',
    content: 'Khuyễn mãi đầu tháng',
    description:
      'Lorem ipsum dolor sit amet, et nam pertinax gloriatur. Sea te minim soleat senserit, ex quo luptatum tacimates voluptatum, salutandidelicatissimi eam ea. In sed nullam laboramus appellantur, mei eiomnis dolorem mnesarchum. Lorem ipsum dolor sit amet, et nampertinax gloriatur. Sea te minim soleat senserit, ex quo luptatumtacimates voluptatum, salutandi delicatissimi eam ea. In sed nullamlaboramus appellantur, mei ei omnis dolorem mnesarchum.',
    urlOrder: 'https://demo.delimall.vn/nha-hang/1059-pizzahut-1',
  },
  {
    name: 'Chi nhánh 2 zone 1',
    address: 'Số 22 Hoàng Diệu Quận 4 Tp.HCM',
    image:
      'https://cdn.tgdd.vn/Files/2022/01/21/1412109/huong-dan-cach-lam-tra-sua-tran-chau-duong-den-202201211522033706.jpg',
    content: 'Sale sinh nhật',
    description:
      'Lorem ipsum dolor sit amet, et nam pertinax gloriatur. Sea te minim soleat senserit, ex quo luptatum tacimates voluptatum, salutandidelicatissimi eam ea. In sed nullam laboramus appellantur, mei eiomnis dolorem mnesarchum. Lorem ipsum dolor sit amet, et nampertinax gloriatur. Sea te minim soleat senserit, ex quo luptatumtacimates voluptatum, salutandi delicatissimi eam ea. In sed nullamlaboramus appellantur, mei ei omnis dolorem mnesarchum.',
    urlOrder: 'https://demo.delimall.vn/nha-hang/1059-pizzahut-1',
  },
  {
    name: 'Chi nhánh 1 zone 2',
    address: 'Số 22 Hoàng Diệu Quận 4 Tp.HCM',
    image:
      'https://cdn.tgdd.vn/Files/2019/10/05/1205092/cach-lam-com-ga-tai-nha-hat-com-deo-thom-con-thit-ga-thi-mem-ngot-da-vang-uom-202208251359128428.jpg',
    content: 'Kỉ niệm 10 năm',
    description:
      'Lorem ipsum dolor sit amet, et nam pertinax gloriatur. Sea te minim soleat senserit, ex quo luptatum tacimates voluptatum, salutandidelicatissimi eam ea. In sed nullam laboramus appellantur, mei eiomnis dolorem mnesarchum. Lorem ipsum dolor sit amet, et nampertinax gloriatur. Sea te minim soleat senserit, ex quo luptatumtacimates voluptatum, salutandi delicatissimi eam ea. In sed nullamlaboramus appellantur, mei ei omnis dolorem mnesarchum.',
    urlOrder: 'https://demo.delimall.vn/nha-hang/1059-pizzahut-1',
  },
  {
    name: 'chi nhánh 1 zone 3',
    address: 'Số 22 Hoàng Diệu Quận 4 Tp.HCM',
    image:
      'https://tea-3.lozi.vn/v1/images/resized/tiem-banh-piza-bin-bin-quan-binh-tan-ho-chi-minh-1637132123870779974-eatery-avatar-1637662887?w=640&type=s',
    content: 'Tưng bừng khai trương giảm 20%',
    description:
      'Lorem ipsum dolor sit amet, et nam pertinax gloriatur. Sea te minim soleat senserit, ex quo luptatum tacimates voluptatum, salutandidelicatissimi eam ea. In sed nullam laboramus appellantur, mei eiomnis dolorem mnesarchum. Lorem ipsum dolor sit amet, et nampertinax gloriatur. Sea te minim soleat senserit, ex quo luptatumtacimates voluptatum, salutandi delicatissimi eam ea. In sed nullamlaboramus appellantur, mei ei omnis dolorem mnesarchum.',
    urlOrder: 'https://demo.delimall.vn/nha-hang/1059-pizzahut-1',
  },
  {
    name: 'Chi nhánh 2 zone 2',
    address: 'Số 22 Hoàng Diệu Quận 4 Tp.HCM',
    image:
      'https://tea-3.lozi.vn/v1/images/resized/tiem-banh-piza-bin-bin-quan-binh-tan-ho-chi-minh-1637132123870779974-eatery-avatar-1637662887?w=640&type=s',
    content: 'Giảm giá sản phẩm mới 20%',
    description:
      'Lorem ipsum dolor sit amet, et nam pertinax gloriatur. Sea te minim soleat senserit, ex quo luptatum tacimates voluptatum, salutandidelicatissimi eam ea. In sed nullam laboramus appellantur, mei eiomnis dolorem mnesarchum. Lorem ipsum dolor sit amet, et nampertinax gloriatur. Sea te minim soleat senserit, ex quo luptatumtacimates voluptatum, salutandi delicatissimi eam ea. In sed nullamlaboramus appellantur, mei ei omnis dolorem mnesarchum.',
    urlOrder: 'https://demo.delimall.vn/nha-hang/1059-pizzahut-1',
  },
  {
    name: 'Chi nhánh 1 zone 4',
    address: 'Số 22 Hoàng Diệu Quận 4 Tp.HCM',
    image:
      'https://tea-3.lozi.vn/v1/images/resized/tiem-banh-piza-bin-bin-quan-binh-tan-ho-chi-minh-1637132123870779974-eatery-avatar-1637662887?w=640&type=s',
    content: 'Tưng bừng khai trương giảm 20%',
    description:
      'Lorem ipsum dolor sit amet, et nam pertinax gloriatur. Sea te minim soleat senserit, ex quo luptatum tacimates voluptatum, salutandidelicatissimi eam ea. In sed nullam laboramus appellantur, mei eiomnis dolorem mnesarchum. Lorem ipsum dolor sit amet, et nampertinax gloriatur. Sea te minim soleat senserit, ex quo luptatumtacimates voluptatum, salutandi delicatissimi eam ea. In sed nullamlaboramus appellantur, mei ei omnis dolorem mnesarchum.',
    urlOrder: 'https://demo.delimall.vn/nha-hang/1059-pizzahut-1',
  },
  {
    name: 'Chi nhánh 2 Zone 4',
    address: 'Số 22 Hoàng Diệu Quận 4 Tp.HCM',
    image:
      'https://tea-3.lozi.vn/v1/images/resized/tiem-banh-piza-bin-bin-quan-binh-tan-ho-chi-minh-1637132123870779974-eatery-avatar-1637662887?w=640&type=s',
    content: 'Tưng bừng khai trương giảm 20%',
    description:
      'Lorem ipsum dolor sit amet, et nam pertinax gloriatur. Sea te minim soleat senserit, ex quo luptatum tacimates voluptatum, salutandidelicatissimi eam ea. In sed nullam laboramus appellantur, mei eiomnis dolorem mnesarchum. Lorem ipsum dolor sit amet, et nampertinax gloriatur. Sea te minim soleat senserit, ex quo luptatumtacimates voluptatum, salutandi delicatissimi eam ea. In sed nullamlaboramus appellantur, mei ei omnis dolorem mnesarchum.',
    urlOrder: 'https://demo.delimall.vn/nha-hang/1059-pizzahut-1',
  },
  {
    name: 'Chi nhánh 1 Zone 5',
    address: 'Số 22 Hoàng Diệu Quận 4 Tp.HCM',
    image:
      'https://tea-3.lozi.vn/v1/images/resized/tiem-banh-piza-bin-bin-quan-binh-tan-ho-chi-minh-1637132123870779974-eatery-avatar-1637662887?w=640&type=s',
    content: 'Tưng bừng khai trương giảm 20%',
    description:
      'Lorem ipsum dolor sit amet, et nam pertinax gloriatur. Sea te minim soleat senserit, ex quo luptatum tacimates voluptatum, salutandidelicatissimi eam ea. In sed nullam laboramus appellantur, mei eiomnis dolorem mnesarchum. Lorem ipsum dolor sit amet, et nampertinax gloriatur. Sea te minim soleat senserit, ex quo luptatumtacimates voluptatum, salutandi delicatissimi eam ea. In sed nullamlaboramus appellantur, mei ei omnis dolorem mnesarchum.',
    urlOrder: 'https://demo.delimall.vn/nha-hang/1059-pizzahut-1',
  },
  {
    name: 'Chi nhánh 2 Zone 5',
    address: 'Số 22 Hoàng Diệu Quận 4 Tp.HCM',
    image:
      'https://tea-3.lozi.vn/v1/images/resized/tiem-banh-piza-bin-bin-quan-binh-tan-ho-chi-minh-1637132123870779974-eatery-avatar-1637662887?w=640&type=s',
    content: 'Tưng bừng khai trương giảm 20%',
    description:
      'Lorem ipsum dolor sit amet, et nam pertinax gloriatur. Sea te minim soleat senserit, ex quo luptatum tacimates voluptatum, salutandidelicatissimi eam ea. In sed nullam laboramus appellantur, mei eiomnis dolorem mnesarchum. Lorem ipsum dolor sit amet, et nampertinax gloriatur. Sea te minim soleat senserit, ex quo luptatumtacimates voluptatum, salutandi delicatissimi eam ea. In sed nullamlaboramus appellantur, mei ei omnis dolorem mnesarchum.',
    urlOrder: 'https://demo.delimall.vn/nha-hang/1059-pizzahut-1',
  },
];

function getCurrentLocation() {
  return new Promise(function (resolve, reject) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        resolve({ lat: lat, lng: lng });
      });
    } else {
      reject(new Error('Geolocation is not supported by this browser.'));
    }
  });
}
//use mapquestapi
const getLocationFromAddress = async (address) => {
  const url = `https://www.mapquestapi.com/geocoding/v1/address?key=QSh03i04EegegI8PRkYYDnC2tci4ZDn4&location=${address}`;
  const res = await fetch(url);
  const jsonData = await res.json();
  const { lat, lng } = jsonData.results[0].locations[0].latLng;
  return { lat, lng };
};

const getAddressByLatLng = async (lat, lng) => {
  const url = `https://www.mapquestapi.com/geocoding/v1/reverse?key=QSh03i04EegegI8PRkYYDnC2tci4ZDn4&location=${lat},${lng}`;
  const res = await fetch(url);
  const jsonData = await res.json();
  const { street, adminArea6, adminArea5, adminArea4, adminArea1 } =
    jsonData.results[0].locations[0];
  const address = `${street},${adminArea6}, ${adminArea5}, ${adminArea4}, ${adminArea1}`;
  return address;
};

const isPointInPolygon = (point, polygon) => {
  const polygonPath = polygon.map(
    (coord) => new google.maps.LatLng(coord.lat, coord.lng)
  );
  const polygonObj = new google.maps.Polygon({ paths: polygonPath });
  const pointObj = new google.maps.LatLng(point.lat, point.lng);
  return google.maps.geometry.poly.containsLocation(pointObj, polygonObj);
};

const calulateDistance = (pointA, pointB) =>
  google.maps.geometry.spherical.computeDistanceBetween(pointA, pointB);

let radius = 10;
//const cpn = { lat: 10.7650743, lng: 106.706535 }; //zone1
const cpn = { lat: 10.7649175, lng: 106.7065851 }; //zone 5
//const cpn = { lat: 10.7653649, lng: 106.703288 }; //ngoài zone
let zoneValid = null; //nếu đang nằm trong zone nào hoặc gần zone nào nhất sẽ gán data của zone đó vào
const listPolygon = []; //sử dụng để kiểm soát những zone trên bảng đồ, data được gán khi load zone và point
const optionMap = {
  focusZone: false,
};
function drawPolygon(polygon, coordinates, ggMap, color) {
  polygon = new google.maps.Polygon({
    paths: coordinates,
    strokeColor: '#FA8072',
    strokeOpacity: 0.7,
    strokeWeight: 2,
    fillColor: color,
    fillOpacity: 0.3,
  });
  listPolygon.push(polygon);
  polygon.setMap(ggMap);
}

const getDataFromKML = () => {
  let kmlData = JSON.parse(localStorage.getItem('kmlLoad'));

  if (!kmlData) return alert('Bạn chưa chọn file kml');
  else {
    const kmlText = kmlData.data;
    return kmlToJson(kmlText.trim()).data;
  }
};

function kmlToJson(kmlString) {
  const parser = new DOMParser();
  const kmlDoc = parser.parseFromString(kmlString, 'application/xml');
  const kml = kmlDoc.getElementsByTagName('kml')[0];

  const placemarks = kml.getElementsByTagName('Placemark');
  const data = [];
  for (let i = 0; i < placemarks.length; i++) {
    const placemark = placemarks[i];
    const feature = {};
    //get name
    const name = placemark.getElementsByTagName('name')[0];
    if (name) {
      feature.name = name.textContent;
    }
    //get description
    const description = placemark.getElementsByTagName('description')[0];
    if (description) {
      feature.description = description.textContent;
    }
    //get style
    const styleUrl = placemark.getElementsByTagName('styleUrl')[0];
    if (styleUrl) {
      const styles = styleUrl.textContent.split('-');

      let color = '';
      if (styles[0] === '#icon') color = styles[2];
      if (styles[0] === '#poly') color = styles[1];

      feature.styleUrl = '#' + color;
    }

    const point = placemark.getElementsByTagName('Point')[0];
    if (point) {
      const coordinates = point
        .getElementsByTagName('coordinates')[0]
        .textContent.trim();
      feature.type = 'Point';
      feature.coordinates = coordinates.split('\n').map((line) => {
        const [lng, lat, _] = line.split(',');
        return { lat: parseFloat(lat), lng: parseFloat(lng) };
      });
    }
    const polygon = placemark.getElementsByTagName('Polygon')[0];

    if (polygon) {
      const coordinates = polygon
        .getElementsByTagName('coordinates')[0]
        .textContent.trim();
      feature.type = 'Polygon';
      feature.coordinates = coordinates.split('\n').map((line) => {
        const [lng, lat, _] = line.split(',');
        return { lat: parseFloat(lat), lng: parseFloat(lng) };
      });
    }
    data.push(feature);
  }
  const geoJson = { data };
  return geoJson;
}

const handleImportFile = () => {
  const fileKml = document.getElementById('fileKml');
  fileKml.addEventListener('change', () => {
    const file = document.getElementById('fileKml').files[0];

    if (!file) return alert('chưa chọn file');
    if (file.name.split('.').pop() != 'kml')
      return alert('Vui lòng chọn file kml');

    const reader = new FileReader();

    reader.onload = async function () {
      const data = { name: file.name, data: reader.result };

      let kml = JSON.parse(localStorage.getItem('kml'));
      if (!kml) {
        const value = [data];
        localStorage.setItem('kml', JSON.stringify(value));
        localStorage.setItem('kmlLoad', JSON.stringify(data));
        location.reload();
      }
      if (kml) {
        const value = [data, ...kml];
        const fileExist = kml.find((item) => item.name == file.name);
        if (fileExist) return alert('File này đã tồn tại');
        else {
          localStorage.setItem('kml', JSON.stringify(value));
          localStorage.setItem('kmlLoad', JSON.stringify(data));
          location.reload();
        }
      }
    };
    reader.readAsText(file);
  });
};

const setMakerForLocation = (map) => {
  const infowindow = new google.maps.InfoWindow({
    content: 'Vị trí hiện tại của bạn',
    ariaLabel: 'Uluru',
  });
  //set maker  cho vị trí hiện tại
  var marker = new google.maps.Marker({
    position: cpn,
    title: 'Vị trí hiện tại của bạn',
    icon: 'https://assets.mapquestapi.com/icon/v2/marker-md-F8E71C-417505-A.png',
  });
  marker.addListener('click', () => {
    infowindow.open({
      anchor: marker,
      map,
    });
  });
  marker.setMap(map);
};

const setCirleForLocaiton = (map) => {
  let circle;
  circle = new google.maps.Circle({
    strokeColor: 'while',
    strokeOpacity: 0.5,
    strokeWeight: 1,
    fillColor: 'orange',
    fillOpacity: 0.4,
    center: cpn,
    radius: radius,
  });
  circle.setMap(map);
};

const loadZoneAndPointForMapByKML = (dataFromKML, map) => {
  if (dataFromKML && dataFromKML.length > 0) {
    dataFromKML.forEach((item) => {
      //vẽ zone
      if (item.type === 'Polygon') {
        let polygon;
        drawPolygon(polygon, item.coordinates, map, item.styleUrl);
      }

      //thêm vị trí của chi nhánh vào bản đồ
      if (item.type == 'Point') {
        const info = fakeData.find((f) => f.name == item.name);
        const infowindowPoint = new google.maps.InfoWindow({
          content: `<div class="coupon">
          <div class="coupon-left">
            <div class="container-coupon">
              <h3 class="name-branch">${info.name} </h3>
              <span class="address-branch">${info.address}</span>
            </div>
            <img
              class="img-coupon"
              src="${info.image}"
              alt="coupon"
            />
          </div>
          <div class="coupon-right">
            <div class="container-coupon" style="background-color: white">
              <p class="coupon-content"><b>${info.content}</b></p>
              <span class="coupon-desc">
              
               ${info.description}
              </span>
            </div>
            <div class="container-coupon order-coupon">
              <a
                href="   ${info.urlOrder}"
                target="_blank"
                class="btn-order"
                >Order now</a
              >
            </div>
          </div>
        </div>
          
          `,
          ariaLabel: 'Uluru',
        });
        var markerPoint = new google.maps.Marker({
          position: item.coordinates[0],
          title: item.name,
          icon: 'https://assets.mapquestapi.com/icon/v2/marker-sm-F8E71C-417505.png',
        });
        markerPoint.addListener('click', () => {
          infowindowPoint.open({
            anchor: markerPoint,
            map,
          });
        });

        markerPoint.setMap(map);
      }
    });
  }
};

const handleCheckInZone = (dataFromKML, map) => {
  document.getElementById('suggest').addEventListener('click', () => {
    let zone = null;
    for (let i = 0; i < dataFromKML.length; i++) {
      const item = dataFromKML[i];
      if (item.type === 'Polygon') {
        const checkPointInPolygon = isPointInPolygon(cpn, item.coordinates);
        if (checkPointInPolygon) {
          zoneValid = item;
          zone = item.name;
          break;
        }
      }
    }

    //sau khi check zone cần vẽ lại zone
    if (zone) {
      alert(`Bạn đang ở trong ${zone}`);
      reRenderPolygon(dataFromKML, map);
    } else {
      handleSuggestZoneNearest(dataFromKML);
      reRenderPolygon(dataFromKML, map);
    }
  });
};

const handleShowListPoint = (dataFromKML) => {
  document
    .getElementById('checkLocation')
    .addEventListener('click', async () => {
      for (let i = 0; i < dataFromKML.length; i++) {
        const item = dataFromKML[i];
        if (item.type === 'Polygon') {
          const checkPointInPolygon = isPointInPolygon(cpn, item.coordinates);
          if (checkPointInPolygon) {
            zoneValid = item;
            break;
          }
        }
      }

      //gợi ý địa điểm gần nhất khi trong khu vực và địa điểm gần nhất
      const listLocationValid = [];

      const coordinatesPoint = dataFromKML.filter(
        (item) => item.type == 'Point'
      );

      for (let i = 0; i < coordinatesPoint.length; i++) {
        const point = coordinatesPoint[i].coordinates[0];
        //phải kiểm tra trước
        if (zoneValid) {
          var check = isPointInPolygon(point, zoneValid.coordinates);
          if (check) {
            listLocationValid.push(coordinatesPoint[i]);
          }
        }
      }

      var address = [];
      listLocationValid.forEach((item) => address.push(item.name));
      alert('Danh sách các địa điểm:\n' + address.join('\n'));
      const listAddress = [];
      listLocationValid.forEach((item) => {
        const point = item.coordinates[0];
        const distance = calulateDistance(cpn, point);
        listAddress.push({ distance, name: item.name });
      });

      const minDistance = listAddress.reduce((acc, cur) => {
        if (cur.distance < acc.distance) {
          return cur;
        } else {
          return acc;
        }
      }, listAddress[0]);

      if (!minDistance) {
        alert('Không có gợi ý');
      } else {
        alert('Địa chỉ gần nhất là: ' + minDistance.name);
      }
    });
};

const handleShowListFileImported = () => {
  const listFile = JSON.parse(localStorage.getItem('kml'));
  const fileSelected = JSON.parse(localStorage.getItem('kmlLoad'));
  if (listFile) {
    let listFileItem = '';
    listFile.forEach((item, index) => {
      listFileItem += `
          <div namefile="${item.name}" class="file-item">
            <span namefile="${item.name}" class="name-file">Zone ${
        index + 1
      }</span>
            <div>
            <img
            namefile="${item.name}" 
            class="select-item"
              style="margin-left: 5px"
              src="./assets/images/${
                item.name == fileSelected?.name ? 'check.png' : 'hand-point.png'
              }"
              width="20px"
              height="20px"
              alt=""
            />
            <img
            namefile="${item.name}" 
            class="remove-item"
              style="margin-left: 5px"
              src="./assets/images/close.png"
              width="20px"
              height="20px"
              alt=""
            /></div>
          </div>`;
    });
    const html = ` <div class="listFileKML">${listFileItem}</div>`;

    const container = document.querySelector('.kml-files');
    container.innerHTML = html;

    const selectItem = document.querySelectorAll('.select-item');
    const removeItem = document.querySelectorAll('.remove-item');
    selectItem.forEach((item) => {
      item.addEventListener('click', () => {
        const fileName = item.getAttribute('namefile');
        const dataKml = listFile.find((item) => item.name == fileName);

        if (dataKml) {
          localStorage.setItem('kmlLoad', JSON.stringify(dataKml));
          location.reload();
        }
      });
    });

    removeItem.forEach((item) => {
      item.addEventListener('click', () => {
        const fileName = item.getAttribute('namefile');
        const dataKml = listFile.find((item) => item.name == fileName);
        if (dataKml.name == fileSelected.name) {
          localStorage.setItem('kmlLoad', JSON.stringify(null));
        }
        const dataAfterRemove = listFile.filter(
          (item) => item.name != fileName
        );
        if (dataAfterRemove) {
          localStorage.setItem('kml', JSON.stringify(dataAfterRemove));
          location.reload();
        } else {
          alert('Có lỗi khi xóa file');
        }
      });
    });
  }
  const showkml = document.querySelector('.showlistkml');
  showkml.addEventListener('click', () => {
    const show = document.querySelector('.kml-files');
    const active = show.classList.contains('active');
    if (active) show.classList.remove('active');
    else show.classList.add('active');
  });
};

const handleSuggestZoneNearest = (dataFromKML) => {
  const coordinatesPolygon = dataFromKML.filter(
    (item) => item.type == 'Polygon'
  );
  let minDistance = Infinity;
  let nearest = null;
  for (let i = 0; i < coordinatesPolygon.length; i++) {
    const polygon = new google.maps.Polygon({
      paths: coordinatesPolygon[i].coordinates,
    });

    google.maps.Polygon.prototype.my_getBounds = function () {
      var bounds = new google.maps.LatLngBounds();
      this.getPath().forEach(function (element, index) {
        bounds.extend(element);
      });
      return bounds;
    };
    const distanceToPolygon =
      google.maps.geometry.spherical.computeDistanceBetween(
        cpn,
        polygon.my_getBounds().getCenter()
      );
    if (distanceToPolygon < minDistance) {
      minDistance = distanceToPolygon;
      nearest = coordinatesPolygon[i];
    }
  }
  zoneValid = nearest;
  alert(
    'Bạn đang ở ngoài Zone: \n' +
      'Zone gần nhất với bạn là ---> ' +
      nearest.name
  );
};

const reRenderPolygon = (dataFromKML, map) => {
  if (optionMap.focusZone && zoneValid) {
    listPolygon.forEach((item) => item.setMap(null));
    let polygonFocus;
    drawPolygon(polygonFocus, zoneValid.coordinates, map, zoneValid.styleUrl);
  }

  if (!optionMap.focusZone) {
    listPolygon.forEach((item) => item.setMap(null));
    loadZoneAndPointForMapByKML(dataFromKML, map);
  }
};
const handleFocusZone = (dataFromKML, map) => {
  const btnFocusZone = document.getElementById('focusZone');
  btnFocusZone.addEventListener('change', () => {
    const checked = document.getElementById('myCheck').checked;
    optionMap.focusZone = checked;
    if (zoneValid) {
      reRenderPolygon(dataFromKML, map);
    }
  });
};
const Main = async () => {
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    center: cpn,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  });
  const dataFromKML = getDataFromKML();
  handleImportFile();
  setMakerForLocation(map);
  setCirleForLocaiton(map);
  loadZoneAndPointForMapByKML(dataFromKML, map);
  handleCheckInZone(dataFromKML, map);
  handleShowListPoint(dataFromKML);
  handleShowListFileImported();

  //option focus zone

  handleFocusZone(dataFromKML, map);
  //show khuyến mãi, button chuyển hướng trong maker
  //vẽ đường
};

async function initMap() {
  await Main();
}

window.initMap = initMap;
