/* top-bar click function start */
var dropdown = document.getElementsByClassName("dropdowns");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  } else {
  dropdownContent.style.display = "block";
  }
  });
}
//== top-bar click function end *==//

// main-slider
  $('.ontime-project-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

// owl carasoul slide ===//
$('.project-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  dots:false,
  autoplay:false,
  responsive:{
    468:{
      items: 1
    },
    500:{
      items: 2
    },
    767:{
      items:2
    },
    991:{
      items:3
    },
    1000:{
      items:6
    }
  }
})

// blog caraousel
$('.img-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  dots:true,
  autoplay:false,
  responsive:{
    468:{
      items: 1
    },
    500:{
      items: 1
    },
    767:{
      items:1
    },
    991:{
      items:1
    },
    1000:{
      items:1
    }
  }
})

// mens carasoul
$('.mens-product').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  dots:true,
  autoplay:true,
  responsive:{
    468:{
      items: 1
    },
    500:{
      items: 1
    },
    767:{
      items:1
    },
    991:{
      items:1
    },
    1000:{
      items:1
    }
  }
})

$('.content-slider').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  dots:true,
  autoplay:true,
  responsive:{
    468:{
      items: 1
    },
    500:{
      items: 1
    },
    767:{
      items:1
    },
    991:{
      items:1
    },
    1000:{
      items:1
    }
  }
})


