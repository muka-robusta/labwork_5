const width_ = document.getElementById('width_input');
const height_ = document.getElementById('height_input');
const border = document.getElementById('border_width');
const border_color = document.getElementById('border_color');
const alt_text = document.getElementById('alter_text');
const button = document.getElementById('submit');
const image = document.getElementById('image');
const elements = [width_, height_, border, border_color, alt_text];


function validation(element) {
	if(parseFloat(element.value) < 0) {
		element.style.border = '2px solid red';
		return false;
	}else {
		element.style.border = '1px solid grey';
		return true;
	}
};

function validate_all(elements) {
	validation_status = true;
	for(let i = 0; i < 3; i++) {
		if(validation(elements[i]) == false) {
			validation_status = false;
			break;
		}
	}
	return validation_status;
};


button.addEventListener('click', ()=> {
	let isChecker = true;
	isChecker = validate_all(elements);
	for (let item of elements) {
		if(!item.checkValidity() || item.value === '') {
			item.style.border = '2px solid red';
			isChecker = false;
		}else {
			item.style.border = '1px solid grey';
		}
	}

	if(isChecker) {
		image.style.width = width_.value + 'px';
		image.style.height = height_.value + 'px';
		image.style.border = border.value + 'px' + ' solid ' + border_color.value;
		image.setAttribute('alt', altText);
	}
});