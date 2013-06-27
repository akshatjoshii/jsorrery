
define(
	[
		'orbit/NameSpace',
		'jquery',
		'orbit/Utils',
		'three'
	], 
	function(ns, $, Utils) {
		
		return {
			init : function(name, color, vertices){
				this.name = name;
				this.color = Utils.rgbToHex(Utils.darken(Utils.hexToRgb(color), 0.75));

				this.setLine(vertices);
			},

			setLine : function(orbitVertices){
				var material = new THREE.LineBasicMaterial({
			        color: this.color
			    });
				_.map(orbitVertices, function(val){ return val.multiplyScalar(ns.SCALE_3D);});
			    var orbitGeom = new THREE.Geometry();
			    orbitGeom.vertices = orbitVertices;
			    this.line = new THREE.Line(orbitGeom, material);
			},

			getDisplayObject : function(){
				return this.line;
			}

		};


	}

);