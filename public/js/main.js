//$(document).ready(function() {
/*if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/js/sw.js').then(function(registration) {
            console.log('Service worker successfully registered on scope', registration.scope);
        }).catch(function(error) {
            console.log('Service worker failed to register');
        });
    });
}*/
//});


if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js').then(function(registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function(err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}


$(document).ready(function() {
    console.log("Document ready!!");

    /*
    if (!$("input[name = 'hazardNo']").val()) {
        $("input[name = 'hazardNo']").css("border", "2px solid red")
    } else {
        $("input[name = 'hazardNo']").css("border", "1px solid #495057")
    }

    $("input[name = 'hazardNo']").on('change', function() {
        console.log("Inside Change");
        if (!$("input[name = 'hazardNo']").val()) {
            $("input[name = 'hazardNo']").css("border", "2px solid red")
        } else {
            $("input[name = 'hazardNo']").css("border", "1px solid #495057")
        }
    })*/

    /*
        $('h1').click(function() {
            console.log("Inside Change BTN");
            if (!$("input[name = 'hazardNo']").val()) {
                $("input[name = 'hazardNo']").css("border", "2px solid red")
            } else {
                $("input[name = 'hazardNo']").css("border", "1px solid #495057")
            }
        })*/

    // ============= HAZARD NO. ======================

    if (!$("input[name = 'hazardNo']").val()) {
        $("input[name = 'hazardNo']").css("border", "2px solid red")
    } else {
        $("input[name = 'hazardNo']").css("border", "1px solid #495057")
    }

    $("input[name = 'hazardNo']").on('change', function() {
        console.log("Inside Change");
        if (!$("input[name = 'hazardNo']").val()) {
            $("input[name = 'hazardNo']").css("border", "2px solid red")
        } else {
            $("input[name = 'hazardNo']").css("border", "1px solid #495057")
        }
    })

    // ============= HAZARD NO. ======================

    if (!$("input[name = 'date']").val()) {
        $("input[name = 'date']").css("border", "2px solid red")
    } else {
        $("input[name = 'date']").css("border", "1px solid #495057")
    }

    $("input[name = 'date']").on('change', function() {
        console.log("Inside Change");
        if (!$("input[name = 'date']").val()) {
            $("input[name = 'date']").css("border", "2px solid red")
        } else {
            $("input[name = 'date']").css("border", "1px solid #495057")
        }
    })

    // ============= HAZARD NO. ======================

    if (!$("input[name = 'time']").val()) {
        $("input[name = 'time']").css("border", "2px solid red")
    } else {
        $("input[name = 'time']").css("border", "1px solid #495057")
    }

    $("input[name = 'time']").on('change', function() {
        console.log("Inside Change");
        if (!$("input[name = 'time']").val()) {
            $("input[name = 'time']").css("border", "2px solid red")
        } else {
            $("input[name = 'time']").css("border", "1px solid #495057")
        }
    })

    // ============= HAZARD NO. ======================

    if (!$("input[name = 'fullname']").val()) {
        $("input[name = 'fullname']").css("border", "2px solid red")
    } else {
        $("input[name = 'fullname']").css("border", "1px solid #495057")
    }

    $("input[name = 'fullname']").on('change', function() {
        console.log("Inside Change");
        if (!$("input[name = 'fullname']").val()) {
            $("input[name = 'fullname']").css("border", "2px solid red")
        } else {
            $("input[name = 'fullname']").css("border", "1px solid #495057")
        }
    })

    // ============= HAZARD NO. ======================

    if (!$("input[name = 'companyname']").val()) {
        $("input[name = 'companyname']").css("border", "2px solid red")
    } else {
        $("input[name = 'companyname']").css("border", "1px solid #495057")
    }

    $("input[name = 'companyname']").on('change', function() {
        console.log("Inside Change");
        if (!$("input[name = 'companyname']").val()) {
            $("input[name = 'companyname']").css("border", "2px solid red")
        } else {
            $("input[name = 'companyname']").css("border", "1px solid #495057")
        }
    })

    // ============= HAZARD NO. ======================

    if (!$("input[name = 'branch']").val()) {
        $("input[name = 'branch']").css("border", "2px solid red")
    } else {
        $("input[name = 'branch']").css("border", "1px solid #495057")
    }

    $("input[name = 'branch']").on('change', function() {
        console.log("Inside Change");
        if (!$("input[name = 'branch']").val()) {
            $("input[name = 'branch']").css("border", "2px solid red")
        } else {
            $("input[name = 'branch']").css("border", "1px solid #495057")
        }
    })

    // ============= HAZARD NO. ======================

    if (!$("input[name = 'contactNo']").val()) {
        $("input[name = 'contactNo']").css("border", "2px solid red")
    } else {
        $("input[name = 'contactNo']").css("border", "1px solid #495057")
    }

    $("input[name = 'contactNo']").on('change', function() {
        console.log("Inside Change");
        if (!$("input[name = 'contactNo']").val()) {
            $("input[name = 'contactNo']").css("border", "2px solid red")
        } else {
            $("input[name = 'contactNo']").css("border", "1px solid #495057")
        }
    })

    // ============= HAZARD NO. ======================

    if (!$("input[name = 'office']").val()) {
        $("input[name = 'office']").css("border", "2px solid red")
    } else {
        $("input[name = 'office']").css("border", "1px solid #495057")
    }

    $("input[name = 'office']").on('change', function() {
        console.log("Inside Change");
        if (!$("input[name = 'office']").val()) {
            $("input[name = 'office']").css("border", "2px solid red")
        } else {
            $("input[name = 'office']").css("border", "1px solid #495057")
        }
    })

    // ============= HAZARD NO. ======================

    if (!$("input[name = 'hazardLoc']").val()) {
        $("input[name = 'hazardLoc']").css("border", "2px solid red")
    } else {
        $("input[name = 'hazardLoc']").css("border", "1px solid #495057")
    }

    $("input[name = 'hazardLoc']").on('change', function() {
        console.log("Inside Change");
        if (!$("input[name = 'hazardLoc']").val()) {
            $("input[name = 'hazardLoc']").css("border", "2px solid red")
        } else {
            $("input[name = 'hazardLoc']").css("border", "1px solid #495057")
        }
    })

    // ============= HAZARD NO. ======================

    if (!$("input[name = 'hazardNo']").val()) {
        $("input[name = 'hazardNo']").css("border", "2px solid red")
    } else {
        $("input[name = 'hazardNo']").css("border", "1px solid #495057")
    }

    $("input[name = 'hazardNo']").on('change', function() {
        console.log("Inside Change");
        if (!$("input[name = 'hazardNo']").val()) {
            $("input[name = 'hazardNo']").css("border", "2px solid red")
        } else {
            $("input[name = 'hazardNo']").css("border", "1px solid #495057")
        }
    })

    // ============= HAZARD NO. ======================

    if (!$("input[name = 'hazardNo']").val()) {
        $("input[name = 'hazardNo']").css("border", "2px solid red")
    } else {
        $("input[name = 'hazardNo']").css("border", "1px solid #495057")
    }

    $("input[name = 'hazardNo']").on('change', function() {
        console.log("Inside Change");
        if (!$("input[name = 'hazardNo']").val()) {
            $("input[name = 'hazardNo']").css("border", "2px solid red")
        } else {
            $("input[name = 'hazardNo']").css("border", "1px solid #495057")
        }
    })

    // ============= HAZARD NO. ======================

    if (!$("input[name = 'hazardNo']").val()) {
        $("input[name = 'hazardNo']").css("border", "2px solid red")
    } else {
        $("input[name = 'hazardNo']").css("border", "1px solid #495057")
    }

    $("input[name = 'hazardNo']").on('change', function() {
        console.log("Inside Change");
        if (!$("input[name = 'hazardNo']").val()) {
            $("input[name = 'hazardNo']").css("border", "2px solid red")
        } else {
            $("input[name = 'hazardNo']").css("border", "1px solid #495057")
        }
    })

    // ============= HAZARD NO. ======================

    if (!$("input[name = 'hazardNo']").val()) {
        $("input[name = 'hazardNo']").css("border", "2px solid red")
    } else {
        $("input[name = 'hazardNo']").css("border", "1px solid #495057")
    }

    $("input[name = 'hazardNo']").on('change', function() {
        console.log("Inside Change");
        if (!$("input[name = 'hazardNo']").val()) {
            $("input[name = 'hazardNo']").css("border", "2px solid red")
        } else {
            $("input[name = 'hazardNo']").css("border", "1px solid #495057")
        }
    })

    // ============= HAZARD NO. ======================

    if (!$("input[name = 'hazardNo']").val()) {
        $("input[name = 'hazardNo']").css("border", "2px solid red")
    } else {
        $("input[name = 'hazardNo']").css("border", "1px solid #495057")
    }

    $("input[name = 'hazardNo']").on('change', function() {
        console.log("Inside Change");
        if (!$("input[name = 'hazardNo']").val()) {
            $("input[name = 'hazardNo']").css("border", "2px solid red")
        } else {
            $("input[name = 'hazardNo']").css("border", "1px solid #495057")
        }
    })

    // ============= HAZARD NO. ======================

    if (!$("input[name = 'hazardNo']").val()) {
        $("input[name = 'hazardNo']").css("border", "2px solid red")
    } else {
        $("input[name = 'hazardNo']").css("border", "1px solid #495057")
    }

    $("input[name = 'hazardNo']").on('change', function() {
        console.log("Inside Change");
        if (!$("input[name = 'hazardNo']").val()) {
            $("input[name = 'hazardNo']").css("border", "2px solid red")
        } else {
            $("input[name = 'hazardNo']").css("border", "1px solid #495057")
        }
    })

    // ============= HAZARD NO. ======================

    if (!$("input[name = 'hazardNo']").val()) {
        $("input[name = 'hazardNo']").css("border", "2px solid red")
    } else {
        $("input[name = 'hazardNo']").css("border", "1px solid #495057")
    }

    $("input[name = 'hazardNo']").on('change', function() {
        console.log("Inside Change");
        if (!$("input[name = 'hazardNo']").val()) {
            $("input[name = 'hazardNo']").css("border", "2px solid red")
        } else {
            $("input[name = 'hazardNo']").css("border", "1px solid #495057")
        }
    })

    // ============= HAZARD NO. ======================

    if (!$("input[name = 'hazardNo']").val()) {
        $("input[name = 'hazardNo']").css("border", "2px solid red")
    } else {
        $("input[name = 'hazardNo']").css("border", "1px solid #495057")
    }

    $("input[name = 'hazardNo']").on('change', function() {
        console.log("Inside Change");
        if (!$("input[name = 'hazardNo']").val()) {
            $("input[name = 'hazardNo']").css("border", "2px solid red")
        } else {
            $("input[name = 'hazardNo']").css("border", "1px solid #495057")
        }
    })



});