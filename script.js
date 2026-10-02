
gsap.registerPlugin(ScrollTrigger);

let speed = 100;
let height = document.querySelector("svg").getBBox().height;
//let svgCord = screenToSVG(document.querySelector("svg"), window.innerWidth / 2, window.innerHeight / 2);

gsap.set("#h2-1", { opacity: 0 });
gsap.set("#bg_grad", { attr: { cy: "-50" } });
gsap.set(["#dinoL", "#dinoR"], { y: 80 });
gsap.set("#dinoL", { x: -10 });

const mm = gsap.matchMedia();
mm.add("(max-width: 1922px)", () => {
    gsap.set(["#cloudStart-L", "#cloudStart-R"], { x: 10, opacity: 1 });
});

/*  SCENE 1 */
let scene1 = gsap.timeline();
ScrollTrigger.create({
    animation: scene1,
    trigger: ".scrollElement",
    start: "top top",
    end: "45% 100%",
    scrub: 3
});

// hills animation
scene1.to("#h1-1", { y: 3 * speed, x: 1 * speed, scale: 0.9, ease: "power1.in" }, 0);
scene1.to("#h1-2", { y: 2.6 * speed, x: -0.6 * speed, ease: "power1.in" }, 0);
scene1.to("#h1-3", { y: 1.7 * speed, x: 1.2 * speed }, 0.03);
scene1.to("#h1-4", { y: 3 * speed, x: 1 * speed }, 0.03);
scene1.to("#h1-5", { y: 2 * speed, x: 1 * speed }, 0.03);
scene1.to("#h1-6", { y: 2.3 * speed, x: -2.5 * speed }, 0);
scene1.to("#h1-7", { y: 5 * speed, x: 1.6 * speed }, 0);
scene1.to("#h1-8", { y: 3.5 * speed, x: 0.2 * speed }, 0);
scene1.to("#h1-9", { y: 3.5 * speed, x: -0.2 * speed }, 0);
scene1.to("#cloudsBig-L", { y: 4.5 * speed, x: -0.2 * speed }, 0);
scene1.to("#cloudsBig-R", { y: 4.5 * speed, x: -0.2 * speed }, 0);
scene1.to("#cloudStart-L", { x: -300 }, 0);
scene1.to("#cloudStart-R", { x: 300 }, 0);

/*   Bird   */
gsap.fromTo(
    "#bird",
    { opacity: 1 },
    {
        y: -250,
        x: 800,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".scrollElement",
            start: "15% top",
            end: "60% 100%",
            scrub: 4,
            onEnter: function () {
                gsap.to("#bird", { scaleX: 1, rotation: 0 });
            },
            onLeave: function () {
                gsap.to("#bird", { scaleX: -1, rotation: -15 });
            }
        }
    }
);

/* Clouds  */
let clouds = gsap.timeline();
ScrollTrigger.create({
    animation: clouds,
    trigger: ".scrollElement",
    start: "top top",
    end: "70% 100%",
    scrub: 1
});

clouds.to("#cloud1", { x: 500 }, 0);
clouds.to("#cloud2", { x: 1000 }, 0);
clouds.to("#cloud3", { x: -1000 }, 0);
clouds.to("#cloud4", { x: -700, y: 25 }, 0);

/* Sun motion Animation  */
let sun = gsap.timeline();
ScrollTrigger.create({
    animation: sun,
    trigger: ".scrollElement",
    start: "1% top",
    end: "2150 100%",
    scrub: 2
    //markers: true,
    //preventOverlaps: true, //if true, it will affect all preceding ScrollTriggers (you can use for example 'scrollTrigger1')
    //fastScrollEnd: true,   //(default 2500px/s)
});

//sun motion
sun.fromTo("#bg_grad", { attr: { cy: "-50" } }, { attr: { cy: "330" } }, 0);
//bg change
//sun.to("#sun", { attr: { offset: "0.15" } }, 0);
sun.to("#bg_grad stop:nth-child(2)", { attr: { offset: "0.15" } }, 0);
sun.to("#bg_grad stop:nth-child(3)", { attr: { offset: "0.18" } }, 0);
sun.to("#bg_grad stop:nth-child(4)", { attr: { offset: "0.25" } }, 0);
sun.to("#bg_grad stop:nth-child(5)", { attr: { offset: "0.46" } }, 0);
sun.to("#bg_grad stop:nth-child(6)", { attr: { "stop-color": "#FF9171" } }, 0);

/*   SCENE 2  */
let scene2 = gsap.timeline();
ScrollTrigger.create({
    animation: scene2,
    trigger: ".scrollElement",
    start: "15% top",
    end: "40% 100%",
    scrub: 3
});

scene2.fromTo("#h2-1", { y: 500, opacity: 0 }, { y: 0, opacity: 1 }, 0);
scene2.fromTo("#h2-2", { y: 500 }, { y: 0 }, 0.1);
scene2.fromTo("#h2-3", { y: 700 }, { y: 0 }, 0.1);
scene2.fromTo("#h2-4", { y: 700 }, { y: 0 }, 0.2);
scene2.fromTo("#h2-5", { y: 800 }, { y: 0 }, 0.3);
scene2.fromTo("#h2-6", { y: 900 }, { y: 0 }, 0.3);

/* Bats */
gsap.set("#bats", { transformOrigin: "50% 50%" });
gsap.fromTo(
    "#bats",
    { opacity: 1, y: 400, scale: 0 },
    {
        y: 20,
        scale: 0.8,
        //transformOrigin: "50% 50%",
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".scrollElement",
            start: "40% top",
            end: "70% 100%",
            scrub: 3,
            onEnter: function () {
                gsap.utils.toArray("#bats path").forEach((item, i) => {
                    gsap.to(item, {
                        scaleX: 0.5,
                        yoyo: true,
                        repeat: 9,
                        transformOrigin: "50% 50%",
                        duration: 0.15,
                        delay: 0.7 + i / 10
                    });
                });
                gsap.set("#bats", { opacity: 1 });
            },
            onLeave: function () {
                //gsap.to("#bats", { opacity: 0, delay: 2 });
            }
        }
    }
);

/* Sun increase */
let sun2 = gsap.timeline();
ScrollTrigger.create({
    animation: sun2,
    trigger: ".scrollElement",
    start: "2000 top",
    end: "5000 100%",
    scrub: 2
});

sun2.to("#sun", { attr: { offset: "1.4" } }, 0);
sun2.to("#bg_grad stop:nth-child(2)", { attr: { offset: "0.7" } }, 0);
sun2.to("#sun", { attr: { "stop-color": "#ffff00" } }, 0);
sun2.to("#lg4 stop:nth-child(1)", { attr: { "stop-color": "#623951" } }, 0);
sun2.to("#lg4 stop:nth-child(2)", { attr: { "stop-color": "#261F36" } }, 0);
sun2.to("#bg_grad stop:nth-child(6)", { attr: { "stop-color": "#45224A" } }, 0);

/* Transition (from Scene2 to Scene3) */
gsap.set("#scene3", { y: height - 40, visibility: "visible" });
let sceneTransition = gsap.timeline();
ScrollTrigger.create({
    animation: sceneTransition,
    trigger: ".scrollElement",
    start: "60% top",
    end: "bottom 100%",
    scrub: 3
});

sceneTransition.to("#h2-1", { y: -height - 100, scale: 1.5, transformOrigin: "50% 50%" }, 0);
sceneTransition.to("#bg_grad", { attr: { cy: "-80" } }, 0.0);
sceneTransition.to("#bg2", { y: 0 }, 0);

/* Scene 3 */
let scene3 = gsap.timeline();
ScrollTrigger.create({
    animation: scene3,
    trigger: ".scrollElement",
    start: "70% 50%",
    end: "bottom 100%",
    scrub: 3
});

//Hills motion
scene3.fromTo("#h3-1", { y: 300 }, { y: -550 }, 0);
scene3.fromTo("#h3-2", { y: 800 }, { y: -550 }, 0.03);
scene3.fromTo("#h3-3", { y: 600 }, { y: -550 }, 0.06);
scene3.fromTo("#h3-4", { y: 800 }, { y: -550 }, 0.09);
scene3.fromTo("#h3-5", { y: 1000 }, { y: -550 }, 0.12);

//stars
scene3.fromTo("#stars", { opacity: 0 }, { opacity: 0.5, y: -500 }, 0);

scene3.to("footer", { opacity: 1 }, 0.3);

//gradient value change
scene3.to("#bg2-grad", { attr: { cy: 600 } }, 0);
scene3.to("#bg2-grad", { attr: { r: 500 } }, 0);

/*   falling star   */
gsap.set("#fstar", { y: -400 });
let fstarTL = gsap.timeline();
ScrollTrigger.create({
    animation: fstarTL,
    trigger: ".scrollElement",
    start: "4200 top",
    end: "6000 bottom",
    scrub: 2,
    onEnter: function () {
        gsap.set("#fstar", { opacity: 1 });
    },
    onLeave: function () {
        gsap.set("#fstar", { opacity: 0 });
    }
});
fstarTL.to("#fstar", { x: -700, y: -250, ease: "power2.out" }, 0);

const eggHint = document.getElementById("eggHint");
const eggBurst = document.getElementById("eggBurst");
const fstar = document.getElementById("fstar");
if (fstar && eggHint && eggBurst) {
    fstar.style.cursor = "pointer";
    fstar.style.pointerEvents = "auto";
    let eggTriggered = false;
    let eggHintLastClickAt = -Infinity;

    function burstAt(x, y) {
        const impact = document.createElement("span");
        impact.className = "egg-impact";
        impact.style.left = x + "px";
        impact.style.top = y + "px";
        eggBurst.appendChild(impact);

        ["egg-ring", "egg-ring egg-ring-delayed", "egg-core"].forEach(function (className) {
            const detail = document.createElement("span");
            detail.className = className;
            impact.appendChild(detail);
        });

        const colors = ["gold", "rose", "white"];
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement("span");
            particle.className = "egg-particle";

            const isStreak = i % 3 === 0;
            const angle = (Math.PI * 2 * i) / 30 + (Math.random() - 0.5) * 0.28;
            const radius = isStreak ? 62 + Math.random() * 64 : 30 + Math.random() * 76;
            const dx = Math.cos(angle) * radius;
            const dy = Math.sin(angle) * radius - 18;

            particle.classList.add("is-" + colors[i % colors.length]);
            if (isStreak) particle.classList.add("is-streak");
            particle.style.setProperty("--dx", dx + "px");
            particle.style.setProperty("--dy", dy + "px");
            particle.style.setProperty("--angle", (angle * 180 / Math.PI) + "deg");
            particle.style.animationDelay = (Math.random() * 0.12) + "s";
            particle.style.width = isStreak ? (2 + Math.random() * 2) + "px" : (4 + Math.random() * 7) + "px";
            particle.style.height = isStreak ? (18 + Math.random() * 22) + "px" : particle.style.width;

            impact.appendChild(particle);
        }

        setTimeout(function () {
            impact.remove();
        }, 1200);
    }

    function launchMeteorShower(x, y) {
        const matrix = fstar.ownerSVGElement.getScreenCTM();
        if (!matrix) return;

        let travelX = matrix.a * -700 + matrix.c * 150;
        let travelY = matrix.b * -700 + matrix.d * 150;
        const travelScale = Math.max(1, (window.innerWidth + 200) / Math.abs(travelX));
        travelX *= travelScale;
        travelY *= travelScale;
        const colors = ["#fff0b3", "#ffc4d5", "#d7f8ff", "#ffffff"];

        for (let i = 0; i < 80; i++) {
            const meteor = document.createElement("span");
            const duration = 1.7 + Math.random() * 0.8;
            const delay = Math.random() * 2.8;
            const startY = window.innerHeight * (0.08 + Math.random() * 0.68);

            meteor.className = "shower-meteor";
            meteor.style.left = (window.innerWidth + 60 + Math.random() * 180) + "px";
            meteor.style.top = startY + "px";
            meteor.style.setProperty("--angle", Math.atan2(travelY, travelX) + "rad");
            meteor.style.setProperty("--travel-x", travelX + "px");
            meteor.style.setProperty("--travel-y", travelY + "px");
            meteor.style.setProperty("--duration", duration + "s");
            meteor.style.setProperty("--delay", delay + "s");
            meteor.style.setProperty("--tail-length", (110 + Math.random() * 90) + "px");
            meteor.style.setProperty("--meteor-color", colors[i % colors.length]);
            eggBurst.appendChild(meteor);

            setTimeout(function () {
                meteor.remove();
            }, (duration + delay) * 1000 + 100);
        }
    }

    function triggerEgg() {
        if (eggTriggered) return;
        eggTriggered = true;

        const head = fstar.querySelector("circle");
        const rect = (head || fstar).getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;

        fstar.style.opacity = "0";
        fstar.style.transform = "scale(1.35)";
        fstar.style.pointerEvents = "none";

        burstAt(x, y);
        launchMeteorShower(x, y);

        eggHint.classList.remove("show");
        void eggHint.offsetWidth;
        eggHint.classList.add("show");
    }

    function checkStarPointer(event) {
        const head = fstar.querySelector("circle");
        const rect = (head || fstar).getBoundingClientRect();
        const inside =
            event.clientX >= rect.left &&
            event.clientX <= rect.right &&
            event.clientY >= rect.top &&
            event.clientY <= rect.bottom;

        if (inside) triggerEgg();
    }

    eggHint.addEventListener("click", function () {
        const now = Date.now();
        if (now - eggHintLastClickAt < 2000) return;
        eggHintLastClickAt = now;

        eggTriggered = false;
        fstar.style.opacity = "1";
        fstar.style.transform = "";
        fstar.style.pointerEvents = "auto";
        launchMeteorShower(window.innerWidth / 2, window.innerHeight / 2);
    });

    fstar.addEventListener("click", triggerEgg);
    document.addEventListener("pointerdown", checkStarPointer);
}

gsap.fromTo("#stars path:nth-of-type(1)", { opacity: 0.3 }, { opacity: 1, duration: 0.3, repeat: -1, repeatDelay: 0.8 });
gsap.fromTo("#stars path:nth-of-type(3)", { opacity: 0.3 }, { opacity: 1, duration: 0.3, repeat: -1, repeatDelay: 1.8 });
gsap.fromTo("#stars path:nth-of-type(5)", { opacity: 0.3 }, { opacity: 1, duration: 0.3, repeat: -1, repeatDelay: 1 });
gsap.fromTo("#stars path:nth-of-type(8)", { opacity: 0.3 }, { opacity: 1, duration: 0.3, repeat: -1, repeatDelay: 1.2 });
gsap.fromTo("#stars path:nth-of-type(11)", { opacity: 0.3 }, { opacity: 1, duration: 0.3, repeat: -1, repeatDelay: 0.5 });
gsap.fromTo("#stars path:nth-of-type(15)", { opacity: 0.3 }, { opacity: 1, duration: 0.3, repeat: -1, repeatDelay: 2 });
gsap.fromTo("#stars path:nth-of-type(17)", { opacity: 0.3 }, { opacity: 1, duration: 0.3, repeat: -1, repeatDelay: 1.1 });
gsap.fromTo("#stars path:nth-of-type(18)", { opacity: 0.3 }, { opacity: 1, duration: 0.3, repeat: -1, repeatDelay: 1.4 });
gsap.fromTo("#stars path:nth-of-type(25)", { opacity: 0.3 }, { opacity: 1, duration: 0.3, repeat: -1, repeatDelay: 1.1 });
gsap.fromTo("#stars path:nth-of-type(28)", { opacity: 0.3 }, { opacity: 1, duration: 0.3, repeat: -1, repeatDelay: 0.9 });
gsap.fromTo("#stars path:nth-of-type(30)", { opacity: 0.3 }, { opacity: 1, duration: 0.3, repeat: -1, repeatDelay: 1.3 });
gsap.fromTo("#stars path:nth-of-type(35)", { opacity: 0.3 }, { opacity: 1, duration: 0.3, repeat: -1, repeatDelay: 2 });
gsap.fromTo("#stars path:nth-of-type(40)", { opacity: 0.3 }, { opacity: 1, duration: 0.3, repeat: -1, repeatDelay: 0.8 });
gsap.fromTo("#stars path:nth-of-type(45)", { opacity: 0.3 }, { opacity: 1, duration: 0.3, repeat: -1, repeatDelay: 1.8 });
gsap.fromTo("#stars path:nth-of-type(48)", { opacity: 0.3 }, { opacity: 1, duration: 0.3, repeat: -1, repeatDelay: 1 });

//reset scrollbar position after refresh
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

// function screenToSVG(svg, x, y) {
//     var pt = svg.createSVGPoint();
//     pt.x = x;
//     pt.y = y;
//     var cursorPt = pt.matrixTransform(svg.getScreenCTM().inverse());
//     return { x: Math.floor(cursorPt.x), y: Math.floor(cursorPt.y) }
// }

/* ================= 四个部分的文字层 =================
 * 1) 首页封面  2) 自我介绍  3) 感兴趣的实验室方向  4) 谢谢大家
 *
 * 每屏在滚动轨道里占 1500px，屏内的 .pin 用 position:sticky 停在屏幕正中，
 * 所以每屏真正「在屏幕上」的滚动窗口正好是 1500px，并且首尾相接、中间不留空白。
 * 淡入/淡出都放在相邻两屏的交接点上，交接点 = 本屏底部 - 半个视口高度。
 */

// 隐藏模板自带的两个角落按钮，避免干扰四部分版式
gsap.set([".btn_works", ".btn_version"], { autoAlpha: 0, pointerEvents: "none" });

const SEGMENT = 1500;   // 每屏占用的滚动高度，与 CSS 中 .sec 的 height 保持一致
const FADE = 300;       // 淡入 / 淡出过渡的滚动长度
const SECTIONS = [
    { sel: "#sectionCover",  top: 0 },
    { sel: "#sectionAbout",  top: 1500 },
    { sel: "#sectionLabs",   top: 3000 },
    { sel: "#sectionThanks", top: 4500 }
];
const cancelCursorFollowCallbacks = new Map();

window.addEventListener("touchstart", function (event) {
    if (event.target.closest("#pageArrows")) return;

    const activeSectionIndex = currentSectionIndex();
    cancelCursorFollowCallbacks.get(activeSectionIndex)?.();
}, { passive: true });

const coverNameChars = Array.from(document.querySelectorAll(".cover-name__char"));
const coverDroneChars = Array.from(document.querySelectorAll(".cover-sub__char"));
const coverTypingTimers = new Set();
let coverTypingStarted = false;
let coverTypingFinished = false;

function scheduleCoverTyping(callback, delay) {
    const timer = window.setTimeout(function () {
        coverTypingTimers.delete(timer);
        if (!coverTypingFinished) callback();
    }, delay);
    coverTypingTimers.add(timer);
}

function finishCoverTyping() {
    if (!coverTypingStarted || coverTypingFinished) return;
    coverTypingFinished = true;
    coverTypingTimers.forEach(window.clearTimeout);
    coverTypingTimers.clear();
    coverNameChars.concat(coverDroneChars).forEach(function (character) {
        character.classList.add("is-visible");
    });
}

function revealCoverCharacters(characters, interval, onComplete) {
    characters.forEach(function (character, index) {
        scheduleCoverTyping(function () {
            character.classList.add("is-visible");
            if (index === characters.length - 1 && onComplete) onComplete();
        }, index * interval);
    });
}

function startCoverTyping() {
    coverTypingStarted = true;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        finishCoverTyping();
        return;
    }

    revealCoverCharacters(coverNameChars, 1000, function () {
        scheduleCoverTyping(function () {
            revealCoverCharacters(coverDroneChars, 500);
        }, 500);
    });
}

if (document.getElementById("entryLoader")) {
    window.addEventListener("entryloadercomplete", startCoverTyping, { once: true });
} else {
    startCoverTyping();
}

const TYPEWRITER_CHAR_DELAY = 35;
const TYPEWRITER_PAUSE = 300;
const TYPEWRITER_PUNCTUATION = /[，。！？；：、,.!?;:…]/u;
const finishSectionTyping = new Map();

SECTIONS.forEach(function (item) {
    const section = document.querySelector(item.sel);
    if (!section) return;

    const paragraphs = Array.from(section.querySelectorAll(".text-block p"));
    if (!paragraphs.length) return;

    const textRuns = paragraphs.map(function (paragraph) {
        const text = paragraph.textContent;
        const breakBefore = paragraph.dataset.breakBefore;
        const breakAt = breakBefore ? text.indexOf(breakBefore) : -1;
        const breakIndex = breakAt < 0 ? -1 : Array.from(text.slice(0, breakAt)).length;
        paragraph.setAttribute("aria-label", text);

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            if (breakAt >= 0) {
                paragraph.replaceChildren(
                    document.createTextNode(text.slice(0, breakAt)),
                    document.createElement("br"),
                    document.createTextNode(text.slice(breakAt))
                );
            }
            return { paragraph, characters: [] };
        }

        const fragment = document.createDocumentFragment();
        const characters = Array.from(text).map(function (character, index) {
            if (index === breakIndex) fragment.appendChild(document.createElement("br"));

            const span = document.createElement("span");
            span.className = "typewriter-char";
            span.setAttribute("aria-hidden", "true");
            span.textContent = character;
            fragment.appendChild(span);
            return span;
        });

        paragraph.replaceChildren(fragment);
        return { paragraph, characters };
    });

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        finishSectionTyping.set(item.sel, function () {});
        return;
    }

    const tags = item.sel === "#sectionAbout"
        ? Array.from(section.querySelectorAll(".tags li"))
        : [];
    if (tags.length) gsap.set(tags, { autoAlpha: 0, y: 12 });

    const sectionIndex = SECTIONS.findIndex(function (entry) {
        return entry.sel === item.sel;
    });
    let paragraphIndex = 0;
    let characterIndex = 0;
    let typingComplete = false;
    let typingTimer = null;
    let cursorFollowFrame = null;
    let cursorFollowPanel = null;
    let cursorFollowTarget = 0;
    let cursorFollowEnabled = true;

    cancelCursorFollowCallbacks.set(sectionIndex, function () {
        cursorFollowEnabled = false;
        if (cursorFollowFrame === null) return;
        window.cancelAnimationFrame(cursorFollowFrame);
        cursorFollowFrame = null;
    });

    function followTypingCursor(character) {
        if (!cursorFollowEnabled || !window.matchMedia("(max-width: 760px)").matches) return;

        const panel = character.closest(".panel");
        if (!panel) return;

        const panelRect = panel.getBoundingClientRect();
        const characterRect = character.getBoundingClientRect();
        cursorFollowPanel = panel;
        cursorFollowTarget = Math.max(0, Math.min(
            panel.scrollHeight - panel.clientHeight,
            panel.scrollTop + characterRect.top + characterRect.height / 2
                - panelRect.top - panel.clientHeight / 2
        ));

        if (cursorFollowFrame !== null) return;

        function movePanel() {
            const distance = cursorFollowTarget - cursorFollowPanel.scrollTop;
            if (Math.abs(distance) <= 0.5) {
                cursorFollowPanel.scrollTop = cursorFollowTarget;
                cursorFollowFrame = null;
                return;
            }

            cursorFollowPanel.scrollTop += distance * 0.12;
            cursorFollowFrame = window.requestAnimationFrame(movePanel);
        }

        cursorFollowFrame = window.requestAnimationFrame(movePanel);
    }

    function scheduleNextCharacter(delay) {
        typingTimer = window.setTimeout(function () {
            typingTimer = null;
            typeNextCharacter();
        }, delay);
    }

    function finishTyping() {
        if (typingComplete) return;
        typingComplete = true;
        if (typingTimer !== null) {
            window.clearTimeout(typingTimer);
            typingTimer = null;
        }
        textRuns.forEach(function (run) {
            run.paragraph.classList.remove("is-typing");
            run.characters.forEach(function (character) {
                character.classList.add("is-visible");
                character.classList.remove("is-current");
            });
        });
        if (tags.length) {
            gsap.to(tags, {
                autoAlpha: 1,
                y: 0,
                duration: 0.45,
                stagger: 0.12,
                ease: "power2.out"
            });
        }
    }

    function typeNextCharacter() {
        if (typingComplete) return;

        const current = textRuns[paragraphIndex];
        if (!current) {
            finishTyping();
            return;
        }

        const character = current.characters[characterIndex];
        if (!character) {
            paragraphIndex += 1;
            characterIndex = 0;
            if (paragraphIndex < textRuns.length) {
                scheduleNextCharacter(TYPEWRITER_PAUSE);
            } else {
                finishTyping();
            }
            return;
        }

        if (characterIndex === 0) current.paragraph.classList.add("is-typing");
        current.paragraph.querySelector(".is-current")?.classList.remove("is-current");
        character.classList.add("is-visible", "is-current");
        followTypingCursor(character);
        characterIndex += 1;

        if (characterIndex < current.characters.length) {
            const delay = TYPEWRITER_PUNCTUATION.test(character.textContent)
                ? TYPEWRITER_PAUSE
                : TYPEWRITER_CHAR_DELAY;
            scheduleNextCharacter(delay);
            return;
        }

        current.paragraph.classList.remove("is-typing");
        character.classList.remove("is-current");
        paragraphIndex += 1;
        characterIndex = 0;
        if (paragraphIndex < textRuns.length) {
            scheduleNextCharacter(TYPEWRITER_PAUSE);
        } else {
            finishTyping();
        }
    }

    finishSectionTyping.set(item.sel, finishTyping);

    ScrollTrigger.create({
        trigger: section,
        start: "top center",
        once: true,
        onEnter: function () {
            typeNextCharacter();
        }
    });
});

// 第 i 屏与下一屏的交接点（滚动位置）
function crossPoint(i) {
    return SECTIONS[i].top + SEGMENT - window.innerHeight / 2;
}

SECTIONS.forEach(function (item, i) {
    const el = document.querySelector(item.sel);
    if (!el) return;
    const pin = el.querySelector(".pin");
    if (!pin) return;

    if (i === 0) {
        // 封面：一进页面就完整显示，不参与淡入
        gsap.set(pin, { autoAlpha: 1, y: 0 });
    } else {
        // 上一屏离场时，这一屏同时进场
        const at = crossPoint(i - 1);
        gsap.fromTo(pin,
            { autoAlpha: 0, y: 30 },
            {
                autoAlpha: 1, y: 0, ease: "power2.out", immediateRender: false,
                scrollTrigger: {
                    trigger: ".scrollElement",
                    start: () => "top+=" + (at - FADE) + " top",
                    end: () => "top+=" + at + " top",
                    scrub: 0.4
                }
            }
        );
    }

    // 最后一屏留在画面上，不淡出
    if (i < SECTIONS.length - 1) {
        const at = crossPoint(i);
        gsap.fromTo(pin,
            { autoAlpha: 1, y: 0 },
            {
                autoAlpha: 0, y: -30, ease: "power2.in", immediateRender: false,
                scrollTrigger: {
                    trigger: ".scrollElement",
                    start: () => "top+=" + (at - FADE) + " top",
                    end: () => "top+=" + at + " top",
                    scrub: 0.4
                }
            }
        );
    }
});

/* ---- 右侧四部分导航指示器 + 左侧翻页方向键 ---- */
const navDots = gsap.utils.toArray("#sectionNav .nav-dot");
const arrowBtns = gsap.utils.toArray("#pageArrows .arrow-btn");

function currentSectionIndex() {
    const s = window.scrollY || window.pageYOffset || 0;
    for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const startAt = i === 0 ? 0 : crossPoint(i - 1);
        if (s >= startAt) return i;
    }
    return 0;
}

// 跳到第 i 屏（正好停在那一屏内容居中处）
function goToSection(i) {
    if (i < 0 || i >= SECTIONS.length) return;
    window.scrollTo({ top: SECTIONS[i].top, behavior: "smooth" });
}

function finishPageTyping(index) {
    const section = SECTIONS[index];
    if (!section) return;

    if (section.sel === "#sectionCover") finishCoverTyping();
    finishSectionTyping.get(section.sel)?.();
}

function syncControls() {
    const idx = currentSectionIndex();

    navDots.forEach(function (dot, i) {
        dot.classList.toggle("is-active", i === idx);
    });

    // 首屏时「上一屏」不可用，末屏时「下一屏」不可用
    arrowBtns.forEach(function (btn) {
        const dir = parseInt(btn.getAttribute("data-dir"), 10) || 0;
        const target = idx + dir;
        btn.disabled = target < 0 || target >= SECTIONS.length;
    });
}

navDots.forEach(function (dot, i) {
    dot.addEventListener("click", function () {
        goToSection(i);
    });
});

// 左侧方向键：上一屏 / 下一屏
arrowBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
        const dir = parseInt(btn.getAttribute("data-dir"), 10) || 0;
        const currentIndex = currentSectionIndex();
        const targetIndex = currentIndex + dir;
        if (targetIndex < 0 || targetIndex >= SECTIONS.length) return;

        // 只跳过当前页面的打字动画，目标页保留正常进入动画
        finishPageTyping(currentIndex);
        goToSection(targetIndex);
    });
});

// 键盘方向键、PageUp / PageDown 也能整屏翻页
window.addEventListener("keydown", function (e) {
    if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault();
        const idx = currentSectionIndex();
        if (idx >= SECTIONS.length - 1) return;
        finishPageTyping(idx);
        goToSection(idx + 1);
    } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        const idx = currentSectionIndex();
        if (idx <= 0) return;
        finishPageTyping(idx);
        goToSection(idx - 1);
    }
});

window.addEventListener("scroll", syncControls, { passive: true });
window.addEventListener("resize", syncControls);
syncControls();

