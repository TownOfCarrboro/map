var pois = {
  'aeroway:aerodrome': [['transport.aerial'], 'transport_airport', 'Aerodrome'],
  'aeroway:gate': [['transport.aerial'], 'transport_airport_gate', 'Gate'],
  'aeroway:helipad': [['transport.aerial'], 'transport_helicopter_pad', 'Helipad'],
  'aeroway:terminal': [['transport.aerial'], 'transport_airport_terminal', 'Terminal'],
  'amenity:atm': [['financial.atms'], 'money_atm', 'ATM'],
  'amenity:bank': [['financial.banks'], 'money_bank2', 'Bank'],
  'amenity:bar': [['food.bars'], 'food_bar', 'Bar'],
  'amenity:bbq': [['amenity.equipments'], 'tourist_picnic', 'Grill'],
  'amenity:bench': [['amenity.equipments'], 'amenity_bench', 'Bench'],
  'amenity:bicycle_parking':  [['transport.bicycles', 'transport.parkings'], 'transport_parking_bicycle', 'Bicycle parking'],
  'amenity:bicycle_rental': [['transport.bicycles','shopping'], 'transport_rental_bicycle', 'Bicycle rental'],
  'amenity:bus_station': [['transport.buses'], 'transport_bus_station', 'Bus station'],
  'amenity:cafe': [['food.cafes'], 'food_cafe', 'Cafe'],
  'amenity:car_rental': [['transport.cars'], 'transport_rental_car', 'Car rental'],
  'amenity:cinema': [['amenity.culture'], 'tourist_cinema', 'Cinema'],
  'amenity:college': [['amenity.schools'], 'education_university', 'College'],
  'amenity:doctors': [['healthcare.doctors'], 'health_doctors', 'Doctors'],
  'amenity:drinking_water': [['food.water','amenity.equipments'], 'food_drinkingtap', 'Drinking water'],
  'amenity:fast_food': [['food.restaurant'], 'food_fastfood', 'Fast food'],
  'amenity:ferry_terminal': [['transport.maritime'], 'transport_port', 'Ferry'],
  'amenity:fire_station': [['amenity.safety', 'healthcare.safety'], 'amenity_firestation2', 'Fire station'],
  'amenity:fountain': [['amenity.equipments'], 'amenity_fountain2', 'Fountain'],
  'amenity:fuel': [['transport.gas stations'], 'transport_fuel', 'Gas station'],
  'amenity:grave_yard': [['amenity.religion'], 'place_of_worship_unknown3', 'Graveyard'],
  'amenity:hospital': [['healthcare.hospitals', 'amenity.safety'], 'health_hospital', 'Hospital'],
  'amenity:hunting_stand': [['amenity.recreation'], 'sport_shooting', 'Hunting stand'],
  'amenity:kindergarten': [['amenity.schools'], 'education_nursery3', 'Kindergaten'],
  'amenity:library': [['amenity.culture'], 'amenity_library', 'Library'],
  'amenity:marketplace': [['food.shopping', 'shopping.food'], 'shopping_marketplace', 'Market'],
  'amenity:nightclub': [['arts.night clubs'], 'food_bar', 'Nightclub'],
  'amenity:parking': [['transport.parkings'], 'transport_parking_car', 'Parking'],
  'amenity:pharmacy': [['healthcare.pharmacies'], 'health_pharmacy', 'Pharmacy'],
  'amenity:place_of_worship': [['amenity.religion'], 'place_of_worship_unknown', 'Church'],
  'amenity:police': [['amenity.safety', 'amenity.administrative'], 'amenity_police2', 'Police station'],
  'amenity:post_box': [['amenity.mail'], 'amenity_post_box', 'Mailbox'],
  'amenity:post_office': [['amenity.mail'], 'amenity_post_office', 'Post office'],
  'amenity:pub': [['food.bars'], 'food_pub', 'Pub'],
  'amenity:recycling': [['amenity.recycling'], 'amenity_recycling', 'Recycling'],
  'amenity:restaurant': [['food.restaurants'], 'food_restaurant', 'Restaurant'],
  'amenity:school': [['amenity.schools'], 'education_school', 'School'],
  'amenity:shelter': [['amenity.accomodation'], 'accommodation_shelter2', 'Shelter'],
  'amenity:swimming_pool': [['amenity.recreation'], 'sport_swimming_outdoor', 'Swimming pool'],
  'amenity:taxi': [['transport.Taxis'], 'transport_taxi_rank', 'Taxi'],
  'amenity:telephone': [['amenity'], 'amenity_telephone', 'Telephone'],
  'amenity:theatre': [['arts.theaters'], 'tourist_theatre', 'Theater'],
  'amenity:toilets': [['amenity.toilets'], 'amenity_toilets', 'Restrooms'],
  'amenity:townhall': [['amenity.administrative'], 'amenity_town_hall', 'Townhall'],
  'amenity:university': [['amenity.schools'], 'education_university', 'University'],
  'amenity:vending_machine': [['amenity.equipments', 'shopping.vending machines'], 'shopping_vending_machine', "Vending machine"],
  'amenity:veterinary': [['healthcare.doctors'], 'health_veterinary', 'Veterinary'],
  'amenity:waste_basket': [['amenity.recycling'], 'amenity_waste_bin', 'Trash'],
  //'barrier:block': [['transport.barriers'], 'barrier_blocks', 'Block'],
  'barrier:bollard': [['transport.barriers'], 'barrier_bollard', 'Bollard'],
  'barrier:cattle_grid': [['transport.barriers'], 'barrier_cattle_grid', 'Cattle grid'],
  'barrier:cycle_barrier': [['transport.barriers'], 'barrier_cycle_barrier', 'Cycle barrier'],
  //'barrier:gate': [['transport.barriers'], 'barrier_gate', 'Gate'],
  'barrier:kissing_gate': [['transport.barriers'], 'barrier_kissing_gate', 'Gate'],
  'barrier:lift_gate': [['transport.barriers'],'barrier_lift_gate', 'Gate'],
  'barrier:stile': [['transport.barriers'],'barrier_stile', 'Stile'],
  'barrier:toll_booth': [['transport.barriers'],'barrier_toll_booth', 'Toll booth'],
  'boundary:administrative': [['amenity.administrative'],'poi_boundary_administrative', 'Boundary'],
  'craft:blacksmith': [['arts.crafts'],'tourist_art_gallery2', 'Dressmaker'],
  'craft:dressmaker': [['arts.crafts','shopping.crafts'],'shopping_clothes', 'Dressmaker'],
  'craft:photographer': [['arts.crafts','shopping.crafts'],'shopping_photo', 'Photographer'],
  'highway:bus_stop': [['transport.buses'],'transport_bus_stop2', 'Bus stop'],
  'highway:crossing': [['transport'],'transport_zebra_crossing', 'Crossing'],
  'highway:mini_roundabout': [['transport'],'transport_miniroundabout_anticlockwise', 'Round about'],
  'highway:turning_circle': [['transport'],'transport_turning_circle', 'Turning circle'],
  'historic:archaeological_site': [['amenity.culture'],'tourist_archaeological', 'Archaeological site'],
  'historic:battlefield': [['amenity.culture'],'tourist_battlefield', 'Battlefield'],
  'historic:castle': [['amenity.culture'],'tourist_castle', 'Castle'],
  'historic:memorial': [['amenity.culture'],'tourist_memorial', 'Memorial'],
  'historic:monument': [['amenity.culture'],'tourist_monument', 'Monument'],
  'historic:ruins': [['amenity.culture'],'tourist_ruin', 'Ruins'],
  'landuse:cemetery': [['amenity.religion'],'place_of_worship_unknown3', 'Cemetery'],
  'landuse:farmland': [[],'landuse_grass', 'Farmland'],
  'landuse:farm': [[],'landuse_grass', 'Farm'],
  'landuse:farmyard': [[],'landuse_grass', 'Farm'],
  'landuse:forest': [[],'landuse_coniferous', 'Forest'],
  'landuse:meadow': [[],'landuse_grass', 'Meadow'],
  'landuse:military': [[],'poi_military_bunker', 'Military'],
  'landuse:orchard': [[],'landuse_grass', 'Orchard'],
  'landuse:quarry': [[],'poi_mine', 'Quarry'],
  'landuse:vineyard': [[],'landuse_grass', 'Vineyard'],
  'leisure:golf_course': [['amenity.recreation'],'sport_golf', 'Golf'],
  'leisure:marina': [['amenity.recreation'],'transport_marina', 'Marina'],
  'leisure:pitch': [['amenity.recreation'],'sport_leisure_centre', 'Pitch'],
  'leisure:playground': [['amenity.recreation'],'amenity_playground', 'Playground'],
  'leisure:recreation_ground': [['amenity'],'sport_leisure_centre', 'Recreation ground'],
  'leisure:slipway': [['amenity.recreation','transport.maritime'],'transport_slipway', 'Slipway'],
  'leisure:sports_centre': [['amenity.recreation'],'sport_leisure_centre', 'Sports center'],
  'leisure:stadium': [['amenity.recreation'],'sport_stadium', 'Stadium'],
  'leisure:track': [['amenity.recreation'],'sport_leisure_centre', 'Track'],
  'natural:wood': [[],'landuse_coniferous', 'Wood'],
  'place:city': [['amenity.administrative'],'poi_place_city', 'City'],
  'place:hamlet': [['amenity.administrative'],'poi_place_hamlet', 'Hamlet'],
  'place:neighbourhood': [['amenity.administrative'],'poi_place_suburb', 'Neighborhood'],
  'place:suburb': [['amenity.administrative'],'poi_place_suburb', 'Suburb'],
  'place:town': [['amenity.administrative'],'poi_place_town', 'Town'],
  'place:village': [['amenity.administrative'],'poi_place_village', 'Village'],
  'power:pole': [['amenity.power'],'power_tower_low', 'Pole'],
  'power:station': [['amenity.power'],'power_substation', 'Station'],
  'power:sub_station': [['amenity.power'],'power_transformer', 'Substation'],
  'power:tower': [['amenity.power'],'power_tower_high2', 'Tower'],
  'railway:station': [['transport.trains'],'transport_train_station', 'Station'],
  'railway:tram_stop': [['transport.trains'],'transport_tram_stop', 'Tram stop'],
  'shop:alcohol': [['food.shopping', 'shopping.food'],'shopping_alcohol', 'Alcohol'],
  'shop:art': [['arts.shopping', 'shopping.crafts'],'tourist_art_gallery2', 'Art shop'],
  'shop:bakery': [['food.shopping'],'shopping_bakery', 'Bakery'],
  'shop:bicycle': [['shopping', 'transport.bicycles'],'shopping_bicycle', 'Bicycle'],
  'shop:books': [['shopping', 'amenity.culture'],'shopping_book', 'Books'],
  'shop:butcher': [['food.shopping'],'shopping_butcher', 'Butcher'],
  'shop:car_repair': [['shopping','transport.cars'],'shopping_car_repair', 'Car repair'],
  'shop:car_parts': [['shopping','transport.cars'],'shopping_car_repair', 'Car parts'],
  'shop:car': [['shopping', 'transport.cars'],'shopping_car', 'Car'],
  'shop:clothes': [['shopping.clothing'],'shopping_clothes', 'Clothes'],
  'shop:computer': [['shopping'],'shopping_computer', 'Computer'],
  'shop:confectionery': [['food.shopping','shopping'],'shopping_confectionery', 'Confection'],
  'shop:convenience': [['food.shopping','shopping'],'shopping_convenience', 'Convenience'],
  'shop:department_store': [['shopping.clothing'],'shopping_department_store', 'Department store'],
  'shop:doityourself': [['shopping'],'shopping_diy', 'DoItYourself'],
  'shop:fishmonger': [['food.shopping'],'shopping_fish', 'Fishmonger'],
  'shop:florist': [['shopping'],'shopping_florist', 'Florist'],
  'shop:garden_centre': [['shopping'],'shopping_garden_centre', 'Garden center'],
  'shop:gift': [['shopping.crafts'],'shopping_gift', 'Gift'],
  'shop:greengrocer': [['shopping'],'shopping_greengrocer', 'Greengrocer'],
  'shop:hairdresser': [['shopping'],'shopping_hairdresser', 'Haircutter'],
  'shop:hifi': [['shopping'],'shopping_hifi', 'Hifi'],
  'shop:jewelry': [['shopping.crafts','arts.shopping'],'shopping_jewelry', 'Jeweler'],
  'shop:kiosk': [['shopping', 'amenity.vending machines'],'shopping_kiosk', 'Kiosk'],
  'shop:laundry': [['shopping'],'shopping_laundrette', 'Laundry'],
  'shop:mobile_phone': [['shopping'],'shopping_mobile_phone', 'Mobile phone'],
  'shop:motorcycle': [['shopping'],'shopping_motorcycle', 'Motorcycle'],
  'shop:music': [['shopping.crafts', 'arts.shopping'],'shopping_music', 'Music'],
  'shop:newsagent': [['shopping'],'shopping_newspaper', 'Newsstand'],
  'shop:supermarket': [['shopping','food'],'shopping_supermarket', 'Supermarket'],
  'shop:toys': [['shopping'],'shopping_toys', 'Toys'],
  'tourism:alpine_hut': [['amenity.accomodation'],'accommodation_alpinehut', 'Alpine hut'],
  'tourism:artwork': [['arts'],'tourist_art_gallery2', 'Artwork'],
  'tourism:attraction': [['amenity'],'tourist_attraction', 'Attraction'],
  'tourism:camp_site': [['amenity.accomodation'],'accommodation_camping', 'Camp site'],
  'tourism:caravan_site': [['amenity.accomodation'],'accommodation_caravan_park', 'Caravan site'],
  'tourism:chalet': [['amenity.accomodation'],'accommodation_chalet', 'Chalet'],
  'tourism:guest_house': [['amenity.accomodation'],'accommodation_bed_and_breakfast', 'Guest house'],
  'tourism:hostel': [['amenity.accomodation'],'accommodation_youth_hostel', 'Hostel'],
  'tourism:hotel': [['amenity.accomodation'],'accommodation_hotel2', 'Hotel'],
  'tourism:motel': [['amenity.accomodation'],'accommodation_motel', 'Motel'],
  'tourism:museum': [['amenity.culture'],'tourist_museum', 'Museum'],
  'tourism:picnic_site': [['amenity.accomodation'],'tourist_picnic', 'Picnic'],
  'tourism:theme_park': [['amenity'],'tourist_theme_park', 'Theme park'],
  'tourism:viewpoint': [['amenity','transport'],'tourist_view_point', 'Viewpoint'],
  'tourism:zoo': [['amenity'],'tourist_zoo', 'Zoo'],
  'traffic_calming:yes': [['transport.cars'],'transport_speedbump', 'Speed bump']
}

function tagsPOI(tags){
  for(var kv in pois){
    var k = kv.split(':')[0];
    var v = kv.split(':')[1];
    var t = tags != null ? tags[k] : null;
    if (t == null){
      continue;
    }
    t = t.split(';')[0];
    if (t == v){
      return pois[kv];
      break;
    }
  }
  return [];
}

function poiCategories(tags){
  var poi = tagsPOI(tags);
  var categories = poi != null ? poi[0] : [];
  return categories != null ? categories : [];
}

function isPOIInCategory(poiTags, category, subCategory){
  var poi = tagsPOI(poiTags);
  var poiCategories = poi != null ? poi[0] : [];
  if (subCategory){
    category = category + '.' + subCategory;
  }
  if (poiCategories != null){
    for (var i=0; i < poiCategories.length; ++i){
      if (category.indexOf(poiCategories[i]) == 0 ||
          poiCategories[i].indexOf(category) == 0){
        return true;
      }
    }
  }
  return false;
}

function poiIcon(tags){
  var poi = tagsPOI(tags);
  var icon = poi != null ? poi[1] : '_default';
  icon = icon.replace('-','_');
  return icon;
}

function poiName(tags){
  var poi = tagsPOI(tags);
  var name = poi != null ? poi[2] :'node';
  return name;
}

function parseElements(data, category, subCategory){
  var points = [];
  var nodes = {};
  var ways = {};
  var latlon_ways = {};
  var relation = {};

  // Extract nodes, ways and the unique relation
  for (var i = 0; i < data.elements.length; ++i){
    var element = data.elements[i];
    switch (element['type']){
    case 'node':
      nodes [element['id']] = [element['lat'],element['lon']];
      break;
    case 'way':
      ways [element['id']] = element['nodes'];
      break;
    case 'relation':
      relation = element;
    default:
      break;
    }
  };
  for (var i = 0; i < data.elements.length; ++i){
    var element = data.elements[i];
    var lat = element['lat'];
    var lon = element['lon'];
    var typ = element['type'];
    var tags = element['tags'];
    var ide = element['id'];
    var access = (tags != null) ? tags['access'] : 'public';

    //var elementCategories = poiCategories(tags);
    //if ($.inArray(category, elementCategories) == -1){
    if (!isPOIInCategory(tags, category, subCategory)){
      continue;
    };

    if (access == 'private' || access == 'customers'){
      continue;
    };

    if (typ == 'way'){
      lat = 0;
      lon = 0;
      for (var j = 0; j < ways[element['id']].length; ++j){
        var n = ways[element['id']][j];
        nlat = nodes[n][0];
        nlon = nodes[n][1];
        lat += nlat;
        lon += nlon;
      }
      lat /= ways[element['id']].length;
      lon /= ways[element['id']].length;
      latlon_ways[ide] = [lat, lon];
    }
    else if (typ == 'relation'){
      lat = latlon_ways[element['members'][0]['ref']][0];
      lon = latlon_ways[element['members'][0]['ref']][1];
    }

    if (lat == null || lon == null){
      continue;
    }

    if ('name' in tags){
      name = tags['name'];
    }
    else {
      name = poiName(tags);
    }

    icon = poiIcon(tags);
    point = {'lat': lat, 'lon': lon, 'title': name, 'id': ide, 'type': typ, 'icon': icon}

    if ('addr:street' in tags){
      var houseNumber = 'addr:housenumber' in tags ? tags['addr:housenumber']:'';
      var street = tags['addr:street'];
      point['addr'] = houseNumber + ' ' + street;
    }
    if ('addr:city' in tags){
      var postCode = 'addr:postcode' in tags ? tags['addr:postcode'] : '';
      var city = 'addr:city' in tags ? tags['addr:city'] : '';
      point['city'] = postCode + ' ' + city;
    }
    var w;
    if ('contact:website' in tags){
      w = tags['contact:website'];
      if (!w.indexOf('http://') || !w.indexOf('https://')){
        point['web'] = w;
      }
    }else if ('website' in tags){
      w = tags['website']
      if (!w.indexOf('http://') || !w.indexOf('https://')){
        point['web'] = w;
      }
    }
    if ('contact:email' in tags){
      point['email'] = tags['contact:email'];
    } else if ('email' in tags){
      point['email'] = tags['email'];
    }
    if ('contact:phone' in tags){
      point['phone'] = tags['contact:phone'];
    }else if ('phone' in tags){
      point['phone'] = tags['phone'];
    }
    if ('description' in tags){
      point['desc'] = tags['description'];
    }
    points.push(point);
  };
  return points;
}

function populateMarkers(cluster, data) {
	//$.getJSON('overpass-' + category + '.json', function(data) {
	$.each(data, function(key, val) {
		var popup = '<b>' + val['title'] + '</b> <a href="http://openstreetmap.org/browse/' + val['type'] + '/' + val['id'] + '" target="_blank">*</a><hr/>';
		if (val['addr']) {
			popup += val['addr'] + '<br/>';
		}
		if (val['city']) {
			popup += val['city'] + '<br/>';
		}
		if (val['country']) {
			popup += val['country'] + '<br/>';
		}
		popup += '<hr/>';
		if (val['web']) {
			popup += '<span>website</span>: <a href="' + val['web'] + '" target="_blank">' + val['web'] + '</a><br/>';
		}
		if (val['email']) {
			popup += '<span>e-mail</span>: <a href="mailto:' + val['email'] + '" target="_blank">' + val['email'] + '</a><br/>';
		}
		if (val['phone']) {
			popup += '<span>phone</span>: ' + val['phone'] + '<br/>';
		}
		if (val['desc']) {
			popup += val['desc'] + '<br/>';
		}
		var icon = window.mapIcons[val['icon']];
    var m = L.marker([val['lat'], val['lon']], options={"title": val['title'], "icon": icon})
      .bindPopup(popup).addTo(cluster);
    //cluster.addLayer(m);
	});
	//});
}
