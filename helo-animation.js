gsap.registerPlugin(DrawSVGPlugin);
    entry = document.getElementsByClassName('entry'),
    transition1 = document.getElementsByClassName('transition1'),
    partners = document.getElementsByClassName('partners'),
    partnerNames = document.getElementsByClassName('st7'),
    api = document.getElementsByClassName('api'),
    api2 = document.getElementsByClassName('api2'),
    api3 = document.getElementsByClassName('api3'),
    api4 = document.getElementsByClassName('api4'),
    apis = [api, api2, api3, api4],
    exit = document.getElementsByClassName('exit'),
    checkmarks = document.getElementById('checkmarks'),
    eachCheckmark = document.getElementsByClassName('eachCheckmark');

    var timer = 0.3,
        timer2 = 0.5,
        timer3 = 0.2

    function entryTl() {

        var entryTl = new gsap.timeline()

        entryTl
        .fromTo(entry, {drawSVG: "0% 0%", autoAlpha: 0}, {ease: "power2.in", duration: timer, drawSVG: "0 10%", autoAlpha: 1})
        .to(entry, {ease: "linear", duration: timer, drawSVG: "40% 100%"}, ">")
        .to(entry, {ease: "linear", duration: timer, drawSVG: "90% 100%"}, ">")
        .to(entry, {ease: "power2.out", duration: timer, drawSVG: "100% 100%", attr:{'stroke-width':3}, autoAlpha: 0}, ">")
        .fromTo(transition1, {drawSVG: "0% 2%", autoAlpha: 1}, {ease: "power2.in", duration: timer, drawSVG: "0% 100%"}, "<-0.2")
        .from(transition1, {ease: "power2.out", duration: 0.2, autoAlpha: 0}, "<")
        .to(transition1, {ease: "power2.out", duration: timer, drawSVG: "100% 100%", autoAlpha: 0})

        return entryTl
    }

        function partnersTl() {

        var partnersTl = new gsap.timeline()

        partnersTl
        .fromTo(partners, {drawSVG: "0% 0%", autoAlpha: 0}, {ease: "power2.in", duration: timer2, drawSVG: "0 60%", autoAlpha: 1})
        .to(partners, {ease: "power2.out", duration: 1, drawSVG: "0 100%"}, ">")
        .fromTo(partnerNames, {fill:"#d0d0ff"}, {ease: "power2.out", duration: timer, stagger: 0.1, fill:"#9FEDF5"}, "<")
        .to(partnerNames, {ease: "back.out(1.7)", duration: timer, stagger: 0.1, scale: 1.2, transformOrigin: "50% 50%"}, "<")
        
        return partnersTl
    }

    function apiShopifyTl() {
        var apiShopifyTl = new gsap.timeline()
        apiShopifyTl
        .to(partnerNames[3], {ease: "back.out(1.7)", duration: timer2, scale: 1, transformOrigin: "50% 50%"}, ">")
        .to(partnerNames[3], {ease: "power2.out", duration: timer2, fill:"#d0d0ff"}, "<")
        .fromTo(api, {drawSVG: "0% 0%", autoAlpha: 0}, {ease: "power2.in", duration: timer2, drawSVG: "0 10%", autoAlpha: 1}, "<-0.3")
        .to(api, {ease: "linear", duration: timer2, drawSVG: "40% 100%"}, ">")
        .to(api, {ease: "linear", duration: timer, drawSVG: "90% 100%", autoAlpha: 0}, ">")
        .fromTo(exit[3], {drawSVG: "0% 0%", autoAlpha: 0}, {ease: "power2.in", duration: timer3, drawSVG: "0 10%", autoAlpha: 1}, ">-0.5")
        .to(exit[3], {ease: "linear", duration: timer3, drawSVG: "40% 100%"}, ">")
        .to(exit[3], {ease: "linear", duration: timer, drawSVG: "90% 100%"}, ">")
        .to(exit[3], {ease: "power2.out", duration: timer, drawSVG: "99% 100%", attr:{'stroke-width':3}}, ">")
        .to(exit[3], {ease: "power2.out", duration: timer, autoAlpha: 0}, ">+=0.2")
        .fromTo(eachCheckmark[0], {autoAlpha: 0}, {ease: "power2.out", duration: timer3, autoAlpha: 1}, "<-0.4")
		.to(eachCheckmark[0], {ease: "power2.out", duration: 3, autoAlpha: 0}, ">")
        return apiShopifyTl
    }
    function apiShipstationTl() {
		var apiShipstationTl = new gsap.timeline()
		apiShipstationTl
		.to(partnerNames[2], {ease: "back.out(1.7)", duration: timer2, scale: 1, transformOrigin: "50% 50%"})
		.to(partnerNames[2], {ease: "power2.out", duration: timer2, fill:"#d0d0ff"}, "<")
		.fromTo(api2, {drawSVG: "0% 0%", autoAlpha: 0}, {ease: "power2.in", duration: timer2, drawSVG: "0 10%", autoAlpha: 1}, "<-0.3")
		.to(api2, {ease: "linear", duration: timer2, drawSVG: "40% 100%"}, ">")
		.to(api2, {ease: "linear", duration: timer, drawSVG: "90% 100%", autoAlpha: 0}, ">")
		.fromTo(exit[2], {drawSVG: "0% 0%", autoAlpha: 0}, {ease: "power2.in", duration: timer3, drawSVG: "0 10%", autoAlpha: 1}, ">-0.5")
		.to(exit[2], {ease: "linear", duration: timer3, drawSVG: "40% 100%"}, ">")
		.to(exit[2], {ease: "linear", duration: timer, drawSVG: "90% 100%"}, ">")
		.to(exit[2], {ease: "power2.out", duration: timer, drawSVG: "99% 100%", attr:{'stroke-width':3}}, ">")
		.to(exit[2], {ease: "power2.out", duration: timer, autoAlpha: 0}, ">+=0.2")
		.fromTo(eachCheckmark[1], {autoAlpha: 0}, {ease: "power2.out", duration: timer3, autoAlpha: 1}, "<-0.4")
		.to(eachCheckmark[1], {ease: "power2.out", duration: 3, autoAlpha: 0}, ">")
		return apiShipstationTl
	}
    function apiTmsTl() {
		var apiTmsTl = new gsap.timeline()
		apiTmsTl
		.to(partnerNames[6], {ease: "back.out(1.7)", duration: timer2, scale: 1, transformOrigin: "50% 50%"})
		.to(partnerNames[6], {ease: "power2.out", duration: timer2, fill:"#d0d0ff"}, "<")
		.fromTo(api3, {drawSVG: "0% 0%", autoAlpha: 0}, {ease: "power2.in", duration: timer2, drawSVG: "0 10%", autoAlpha: 1}, "<-0.3")
		.to(api3, {ease: "linear", duration: timer2, drawSVG: "40% 100%"}, ">")
		.to(api3, {ease: "linear", duration: timer, drawSVG: "90% 100%", autoAlpha: 0}, ">")
		.fromTo(exit[1], {drawSVG: "0% 0%", autoAlpha: 0}, {ease: "power2.in", duration: timer3, drawSVG: "0 10%", autoAlpha: 1}, ">-0.5")
		.to(exit[1], {ease: "linear", duration: timer3, drawSVG: "40% 100%"}, ">")
		.to(exit[1], {ease: "linear", duration: timer, drawSVG: "90% 100%"}, ">")
		.to(exit[1], {ease: "power2.out", duration: timer, drawSVG: "99% 100%", attr:{'stroke-width':3}}, ">")
		.to(exit[1], {ease: "power2.out", duration: timer, autoAlpha: 0}, ">+=0.2")
		.fromTo(eachCheckmark[2], {autoAlpha: 0}, {ease: "power2.out", duration: timer3, autoAlpha: 1}, "<-0.4")
		.to(eachCheckmark[2], {ease: "power2.out", duration: 3, autoAlpha: 0}, ">")
		return apiTmsTl
	}
    function apiEasypostTl() {
		var apiEasypostTl = new gsap.timeline()
		apiEasypostTl
		.to(partnerNames[1], {ease: "back.out(1.7)", duration: timer2, scale: 1, transformOrigin: "50% 50%"})
		.to(partnerNames[1], {ease: "power2.out", duration: timer2, fill:"#d0d0ff"}, "<")
		.fromTo(api4, {drawSVG: "0% 0%", autoAlpha: 0}, {ease: "power2.in", duration: timer2, drawSVG: "0 10%", autoAlpha: 1}, "<-0.3")
		.to(api4, {ease: "linear", duration: timer2, drawSVG: "40% 100%"}, ">")
		.to(api4, {ease: "linear", duration: timer, drawSVG: "90% 100%", autoAlpha: 0}, ">")
		.fromTo(exit[0], {drawSVG: "0% 0%", autoAlpha: 0}, {ease: "power2.in", duration: timer3, drawSVG: "0 10%", autoAlpha: 1}, ">-0.5")
		.to(exit[0], {ease: "linear", duration: timer3, drawSVG: "40% 100%"}, ">")
		.to(exit[0], {ease: "linear", duration: timer, drawSVG: "90% 100%"}, ">")
		.to(exit[0], {ease: "power2.out", duration: timer, drawSVG: "99% 100%", attr:{'stroke-width':3}}, ">")
		.to(exit[0], {ease: "power2.out", duration: timer, autoAlpha: 0}, ">+=0.2")
		.fromTo(eachCheckmark[3], {autoAlpha: 0}, {ease: "power2.out", duration: timer3, autoAlpha: 1}, "<-0.4")
		.to(eachCheckmark[3], {ease: "power2.out", duration: 3, autoAlpha: 0}, ">")
		return apiEasypostTl
	}
    function apiShippoTl() {
		var apiShippoTl = new gsap.timeline()
		apiShippoTl
		.to(partnerNames[4], {ease: "back.out(1.7)", duration: timer2, scale: 1, transformOrigin: "50% 50%"}, "<")
		.to(partnerNames[4], {ease: "power2.out", duration: timer2, fill:"#d0d0ff"}, "<")
		.fromTo(api3, {drawSVG: "0% 0%", autoAlpha: 0}, {ease: "power2.in", duration: timer2, drawSVG: "0 10%", autoAlpha: 1}, "<-0.3")
		.to(api3, {ease: "linear", duration: timer2, drawSVG: "40% 100%"}, ">")
		.to(api3, {ease: "linear", duration: timer, drawSVG: "90% 100%", autoAlpha: 0}, ">")
		.fromTo(exit[1], {drawSVG: "0% 0%", autoAlpha: 0}, {ease: "power2.in", duration: timer3, drawSVG: "0 10%", autoAlpha: 1}, ">-0.5")
		.to(exit[1], {ease: "linear", duration: timer3, drawSVG: "40% 100%"}, ">")
		.to(exit[1], {ease: "linear", duration: timer, drawSVG: "90% 100%"}, ">")
		.to(exit[1], {ease: "power2.out", duration: timer, drawSVG: "99% 100%", attr:{'stroke-width':3}}, ">")
		.to(exit[1], {ease: "power2.out", duration: timer, autoAlpha: 0}, ">+=0.2")
		.fromTo(eachCheckmark[2], {autoAlpha: 0}, {ease: "power2.out", duration: timer3, autoAlpha: 1}, "<-0.4")
		.to(eachCheckmark[2], {ease: "power2.out", duration: 3, autoAlpha: 0}, ">")
		return apiShippoTl
	}
    function apiApiTl() {
		var apiApiTl = new gsap.timeline()
		apiApiTl
		.to(partnerNames[0], {ease: "back.out(1.7)", duration: timer2, scale: 1, transformOrigin: "50% 50%"})
		.to(partnerNames[0], {ease: "power2.out", duration: timer2, fill:"#d0d0ff"}, "<")
		.fromTo(api2, {drawSVG: "0% 0%", autoAlpha: 0}, {ease: "power2.in", duration: timer2, drawSVG: "0 10%", autoAlpha: 1}, "<-0.3")
		.to(api2, {ease: "linear", duration: timer2, drawSVG: "40% 100%"}, ">")
		.to(api2, {ease: "linear", duration: timer, drawSVG: "90% 100%", autoAlpha: 0}, ">")
		.fromTo(exit[2], {drawSVG: "0% 0%", autoAlpha: 0}, {ease: "power2.in", duration: timer3, drawSVG: "0 10%", autoAlpha: 1}, ">-0.5")
		.to(exit[2], {ease: "linear", duration: timer3, drawSVG: "40% 100%"}, ">")
		.to(exit[2], {ease: "linear", duration: timer, drawSVG: "90% 100%"}, ">")
		.to(exit[2], {ease: "power2.out", duration: timer, drawSVG: "99% 100%", attr:{'stroke-width':3}}, ">")
		.to(exit[2], {ease: "power2.out", duration: timer, autoAlpha: 0}, ">+=0.2")
		.fromTo(eachCheckmark[1], {autoAlpha: 0}, {ease: "power2.out", duration: timer3, autoAlpha: 1}, "<-0.4")
		.to(eachCheckmark[1], {ease: "power2.out", duration: 3, autoAlpha: 0}, ">")
		return apiApiTl
	}
    function apiCsvTl() {
		var apiCsvTl = new gsap.timeline()
		apiCsvTl
		.to(partnerNames[5], {ease: "back.out(1.7)", duration: timer2, scale: 1, transformOrigin: "50% 50%"})
		.to(partnerNames[5], {ease: "power2.out", duration: timer2, fill:"#d0d0ff"}, "<")
		.fromTo(api, {drawSVG: "0% 0%", autoAlpha: 0}, {ease: "power2.in", duration: timer2, drawSVG: "0 10%", autoAlpha: 1}, "<-0.3")
		.to(api, {ease: "linear", duration: timer2, drawSVG: "40% 100%"}, ">")
		.to(api, {ease: "linear", duration: timer, drawSVG: "90% 100%", autoAlpha: 0}, ">")
		.fromTo(exit[3], {drawSVG: "0% 0%", autoAlpha: 0}, {ease: "power2.in", duration: timer3, drawSVG: "0 10%", autoAlpha: 1}, ">-0.5")
		.to(exit[3], {ease: "linear", duration: timer3, drawSVG: "40% 100%"}, ">")
		.to(exit[3], {ease: "linear", duration: timer, drawSVG: "90% 100%"}, ">")
		.to(exit[3], {ease: "power2.out", duration: timer, drawSVG: "99% 100%", attr:{'stroke-width':3}}, ">")
		.to(exit[3], {ease: "power2.out", duration: timer, autoAlpha: 0}, ">+=0.2")
		.fromTo(eachCheckmark[0], {autoAlpha: 0}, {ease: "power2.out", duration: timer3, autoAlpha: 1}, "<-0.4")
		.to(eachCheckmark[0], {ease: "power2.out", duration: 3, autoAlpha: 0}, ">")
		return apiCsvTl
	}

    var master = gsap.timeline({repeat: -1, repeatDelay: 1});
    master
        .set(partners, {drawSVG: "0% 0%", autoAlpha: 0})
        .set(partnerNames, {fill:"#d0d0ff", scale: 1})
        .set(exit, {drawSVG: "0% 0%", autoAlpha: 0})
        .add(entryTl())
        .add(partnersTl(), "-=0.5")
        .add(apiShopifyTl())
        .add(apiShipstationTl(), "-=3.5")
        .add(apiTmsTl(), "-=3.5")
        .add(apiEasypostTl(), "-=3.5")
        .add(apiShippoTl(), "-=3.5")
        .add(apiApiTl(), "-=3.5")
        .add(apiCsvTl(), "-=3.5")
        .to(partners, {ease: "power2.in", duration: timer2, drawSVG: "80% 100%", autoAlpha: 0}, "-=2")
