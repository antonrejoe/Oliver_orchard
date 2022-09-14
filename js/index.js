/// <reference path="../typings/globals/jquery/index.d.ts" />


let month = [];
let  week = ['Sun', 'Mon', 'Tue', 'Wed','Thu','Fri','Sat'];



for (let i = 0; i < 7; i++) {
    const element_week = document.createElement('span');
    element_week.classList.add( 'week');
    element_week.textContent=week[i];
    
    document.querySelector('div.timeline').appendChild(element_week);
}

for (let i = 8; i < 25; i++) {
    const element = document.createElement('span');
    element.classList.add('date');
    element.textContent=i;
    month.push(element);
    document.querySelector('div.timeline').appendChild(element);
}



console.log(month);



document.querySelector('svg#stats-svg-first').addEventListener('mouseover',function () {

    
let all_bars = [R1_1, R1_2, R2_1, R2_2, R3_1, R3_2];
let all_bars_height = ['168','120','139','50','109','168'];

for (let i = 0; i < all_bars.length; i++){

    setTimeout(() => {
        const bar_current = all_bars[i];
        const bar_current_height = all_bars_height[i] + 'px';
        // const bar_current_height_double = 2*all_bars_height[i] + 'px';
        const transform_prop = 'translateY(-' + ( 0) +')'  ;
        bar_current.style.transform =  transform_prop  ;
        
        bar_current.style.display = 'block';
        bar_current.style.opacity = 1;
        console.log(bar_current.style.height);
        bar_current.style.height = bar_current_height;
        bar_current.style.transition = 'all 1s ease';
       
    }, i*300);
   
    
} 
    
    
});



var bar_name = 'rect' + '#' + 'Rectangle' ; 

const R1_1 = document.querySelector(bar_name + '1' + '_1' );
const R1_2 = document.querySelector(bar_name + '1' + '_2' );
const R2_1 = document.querySelector(bar_name + '2' + '_1' );
const R2_2 = document.querySelector(bar_name + '2' + '_2' );
const R3_1 = document.querySelector(bar_name + '3' + '_1' );
const R3_2 = document.querySelector(bar_name + '3' + '_2' );

console.log(R3_2.clientHeight);
// for (let i = 1 i < ; i++) 1
//     cons element = array[i];
// 1  
// }


// console.log(R3_2);


let dates = document.querySelectorAll('.date');
// console.log(dates);


for (let i = 0; i < dates.length; i++) {

    
    const current_date = dates[i];

    let z_1 = 0;

    if (z_1 == 0) {
        current_date.addEventListener('mouseover',function () {
            current_date.style.transition = 'all 0.5s ease';
            
            // only happening once have to change it 
            return z_1 += 1
        });
          

    }if (z_1 == 1) {
        current_date.addEventListener('mouseover',function () {
            current_date.style.transition = 'all 0.5s ease';
           
            // only happening once have to change it 
            return z_1 -= 1
        });
    }
    
};
// .addEventListener('mouseover',function () {
//     this.style.transition = 'all 1s ease';
//     this.style.transform = 'rotateY(1turn)';

// });




////selecting the icons of the sidebar 

let sidebar_icons_list = [];

const  sidebar_icons = document.querySelectorAll('.sidebar > i');

sidebar_icons_list.push(sidebar_icons);



for (let i = 0; i < sidebar_icons.length; i++) {
    
    
    document.body.addEventListener('scroll', function () {
        
        $('')
        // console.log(sidebar_icons[i].style);

    });

}


// creating dropdown

// selection
// ul
// li


let dropdown = document.querySelectorAll('.dropdown');

// console.log(dropdown);



function create_ul() {
    let ul = document.createElement('ul');
    ul.classList.add('ul-hide');
    ul.classList.add('ul_styling_dropdown');
    let li = document.createElement('li');
    let li_1 = document.createElement('li');
    let li_2 = document.createElement('li');

    let li_list = [li , li_1 , li_2];

    li_list.forEach(element => {
        element.textContent = 'item';
        ul.append(element);
        element.style.margin = '10px'; 
        element.classList.add('li_style');
        element.classList.add('hello_li');
    });
    
    return ul
}


for (let i = 0; i < dropdown.length; i++) {
    const element = dropdown[i];
    let current_child = new create_ul();
    element.appendChild(current_child);
    
}


document.querySelector('span.dropdown:nth-of-type(2) > ul').style.padding = '15px';

for (let i = 0; i < dropdown.length; i++) {
    const element = dropdown[i];
    
    let dropdown_ul_s = []
    
    dropdown_ul_s.push(document.querySelectorAll('span.dropdown >ul'));
    // console.log(dropdown_ul_s);


}

let z = [];
z.push($('.dropdown').children)

console.log(z);

let see = $('.dropdown').children('ul');





$('.dropdown-2' ).click(function () {
        
        $('.dropdown-2 > ul').toggleClass('ul-hide');
    
});

$('.dropdown-1' ).click(function () {
        
        $('.dropdown-1 > ul').toggleClass('ul-hide');
    
});

$('.dropdown-3' ).click(function () {
        
        $('.dropdown-3 > ul').toggleClass('ul-hide');
    
});



