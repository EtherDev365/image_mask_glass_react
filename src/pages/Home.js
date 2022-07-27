import React from 'react';
import "../assets/css/integrity-light.css"
import "../assets/css/cs-inline-css.css"
import Logo from "../assets/images/logo.png"
import { useLocation } from 'react-router-dom'

function Main() {
    const { pathname, hash, key } = useLocation();

    React.useEffect(() => {
        // if not a hash link, scroll to top
        console.log(pathname, hash, key);
        if (hash === '') {
            window.scrollTo(0, 0);
        }
        else {
            setTimeout(() => {
                const id = hash.replace('#', '');
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView();
                }
            }, 0);
        }
        // var csJsData = {"linkSelector":"a[href*=\"#\"]"};
    }, [pathname, hash, key]); // do this on route change
    return (
        <>
            <div id="x-root" className="x-root">
                <div id="x-site" className="x-site site">
                    <header className="x-masthead" role="banner">


                        <div className="x-bar x-bar-top x-bar-h x-bar-absolute x-bar-is-sticky x-bar-outer-spacers e17638-1 mdly-0 mdly-1 mdly-2 mdly-3 top" data-x-bar="{&quot;id&quot;:&quot;e17638-1&quot;,&quot;region&quot;:&quot;top&quot;,&quot;height&quot;:&quot;auto&quot;,&quot;triggerOffset&quot;:&quot;90&quot;,&quot;shrink&quot;:&quot;1&quot;}">

                            <div className="e17638-1 x-bar-content">
                                <div className="x-bar-container e17638-2 mdly-7 mdly-8 mdly-9 mdly-a">
                                    <a className="x-image e17638-3 mdly-d mdly-e mdly-f mdly-g mdly-h mdly-i" href="https://localhost:3000/home">
                                        <img src={Logo} width="1" height="1" alt="Digitypes logo" data-ll-status="loaded" className="entered lazyloaded" />
                                    </a>
                                </div>
                                <div className="x-bar-container e17638-4 mdly-7 mdly-8 mdly-9">
                                    <button className="x-anchor x-anchor-toggle has-graphic e17638-5 mdly-o mdly-p mdly-q mdly-r main_nav x-hide-md x-hide-sm x-hide-xs" tabIndex="0" data-x-toggle="1" data-x-toggleable="e17638-5" data-x-toggle-overlay="1" aria-controls="e17638-5-off-canvas" aria-expanded="false" aria-haspopup="true" aria-label="Toggle Off Canvas Content">
                                        <div className="x-anchor-content">
                                            <span className="x-graphic" aria-hidden="true">
                                                <span className="x-toggle x-toggle-burger x-graphic-child x-graphic-toggle" aria-hidden="true">
                                                    <span className="x-toggle-burger-bun-t" data-x-toggle-anim="x-bun-t-1"></span>
                                                    <span className="x-toggle-burger-patty" data-x-toggle-anim="x-patty-1"></span>
                                                    <span className="x-toggle-burger-bun-b" data-x-toggle-anim="x-bun-b-1"></span>
                                                </span>
                                            </span>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>

                    </header>
                    <div className="x-main full" role="main">
                        <article id="post-4043" className="post-4043 page type-page status-publish has-post-thumbnail hentry">
                            <div className="entry-content content">
                                <div id="cs-content" className="cs-content">
                                    <div className="x-section e4043-1 m34b-0">
                                        <div className="x-row e4043-2 m34b-8">
                                            <div className="x-row-inner" data-chunksize="6">
                                                <div className="x-col e4043-3 m34b-9">
                                                    <div className="x-div e4043-4 m34b-a m34b-b m34b-c m34b-d m34b-e m34b-f m34b-g m34b-h m34b-i">
                                                        <div className="x-div e4043-5 m34b-a m34b-b m34b-c m34b-d m34b-e m34b-f m34b-g m34b-h m34b-i m34b-j">
                                                            <div className="x-slide-container-viewport e4043-6 m34b-12 is-ready" data-x-slide-container="{&quot;swipe&quot;:&quot;&quot;,&quot;autoplay&quot;:&quot;interval&quot;,&quot;adaptiveHeight&quot;:true,&quot;stacked&quot;:true}">
                                                                <div className="x-slide-container-content has-adaptive-height">
                                                                    <div className="x-slide-container is-stacked">
                                                                        <div className="x-slide e4043-7 m34b-13 m34b-1 m34b-2 m34b-3 m34b-4 x-effect-animated x-effect-exit" data-x-slide="" data-x-effect="{&quot;scroll&quot;:true,&quot;offsetTop&quot;:&quot;10%&quot;,&quot;offsetBottom&quot;:&quot;10%&quot;,&quot;behaviorScroll&quot;:&quot;fire-once&quot;,&quot;animationEnter&quot;:&quot;backInDown&quot;,&quot;animationExit&quot;:&quot;slideOutRight&quot;}" >
                                                                            <div className="x-div e4043-8 m34b-f m34b-h m34b-i m34b-j m34b-k m34b-l m34b-m m34b-n m34b-o">
                                                                                <div className="x-text x-text-headline e4043-9 m34b-14 m34b-15 m34b-16"><div className="x-text-content">
                                                                                    <div className="x-text-content-text">
                                                                                        {/* <h1 className="x-text-content-text-primary">
                                                                                            Online marketing agency
                                                                                        </h1> */}
                                                                                        <h2 className="x-text-content-text-subheadline">
                                                                                            F5imagine will do it for you!
                                                                                        </h2>
                                                                                    </div>
                                                                                </div>
                                                                                </div>
                                                                                <a className="x-anchor x-anchor-button e4043-10 m34b-19 m34b-1a m34b-1b " tabIndex="0" href="https://digitypes.dk/service/">
                                                                                    <div className="x-anchor-content">
                                                                                        <div className="x-anchor-text">
                                                                                            <span className="x-anchor-text-primary">
                                                                                                <font>
                                                                                                    <font >Download APP
                                                                                                    </font>
                                                                                                </font>
                                                                                            </span>
                                                                                        </div>
                                                                                    </div>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                        <div className="x-slide e4043-11 m34b-13 m34b-1 m34b-2 m34b-3 m34b-4 x-effect-animated x-effect-exit" data-x-slide="" data-x-effect="{&quot;scroll&quot;:true,&quot;offsetTop&quot;:&quot;10%&quot;,&quot;offsetBottom&quot;:&quot;10%&quot;,&quot;behaviorScroll&quot;:&quot;fire-once&quot;,&quot;animationEnter&quot;:&quot;backInDown&quot;,&quot;animationExit&quot;:&quot;slideOutRight&quot;}">
                                                                            <div className="x-div e4043-12 m34b-f m34b-h m34b-i m34b-j m34b-k m34b-l m34b-m m34b-n m34b-o">
                                                                                <div className="x-text x-text-headline e4043-13 m34b-14 m34b-15 m34b-17"><div className="x-text-content">
                                                                                    <div className="x-text-content-text">
                                                                                        {/* <h2 className="x-text-content-text-primary">
                                                                                            <font ><font>
                                                                                                Online Marketing - Data Driven Marketing</font>
                                                                                            </font>
                                                                                        </h2> */}
                                                                                        <h3 className="x-text-content-text-subheadline">
                                                                                            Share your memories with <br /> your family and friends
                                                                                        </h3>
                                                                                    </div>
                                                                                </div>
                                                                                </div>
                                                                                <a className="x-anchor x-anchor-button e4043-14 m34b-19 m34b-1c m34b-1d " tabIndex="0" href="localhost">
                                                                                    <div className="x-anchor-content">
                                                                                        <div className="x-anchor-text">
                                                                                            <span className="x-anchor-text-primary">
                                                                                                Download APP
                                                                                            </span>
                                                                                        </div>
                                                                                    </div>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                        <div className="x-slide e4043-15 m34b-13 m34b-2 m34b-3 m34b-4 x-effect-animated x-effect-exit" data-x-slide="" data-x-effect="{&quot;scroll&quot;:true,&quot;offsetTop&quot;:&quot;10%&quot;,&quot;offsetBottom&quot;:&quot;10%&quot;,&quot;behaviorScroll&quot;:&quot;fire-once&quot;,&quot;animationEnter&quot;:&quot;backInDown&quot;,&quot;animationExit&quot;:&quot;slideOutRight&quot;}"><div className="x-div e4043-16 m34b-f m34b-h m34b-i m34b-j m34b-k m34b-l m34b-m m34b-n m34b-o">
                                                                            <div className="x-text x-text-headline e4043-17 m34b-14 m34b-15 m34b-17">
                                                                                <div className="x-text-content">
                                                                                    <div className="x-text-content-text">
                                                                                        {/* <h2 className="x-text-content-text-primary">
                                                                                            <font>
                                                                                                <font>Online marketing - Platforms &amp; websites
                                                                                                </font>
                                                                                            </font>
                                                                                        </h2> */}
                                                                                        <h3 className="x-text-content-text-subheadline">
                                                                                            Edit with our world class <br /> editing tools
                                                                                        </h3>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <a className="x-anchor x-anchor-button e4043-18 m34b-19 m34b-1c m34b-1e " tabIndex="0" href="https://digitypes.dk/service_kategori/platforme/">
                                                                                <div className="x-anchor-content">
                                                                                    <div className="x-anchor-text">
                                                                                        <span className="x-anchor-text-primary">
                                                                                            Download APP
                                                                                        </span>
                                                                                    </div>
                                                                                </div>
                                                                            </a>
                                                                        </div>
                                                                        </div>
                                                                        <div className="x-slide e4043-19 m34b-13 m34b-3 m34b-4 x-effect-animated x-effect-exit" data-x-slide="" data-x-effect="{&quot;scroll&quot;:true,&quot;offsetTop&quot;:&quot;10%&quot;,&quot;offsetBottom&quot;:&quot;10%&quot;,&quot;behaviorScroll&quot;:&quot;fire-once&quot;,&quot;animationEnter&quot;:&quot;backInDown&quot;,&quot;animationExit&quot;:&quot;slideOutRight&quot;}" ><div className="x-div e4043-20 m34b-f m34b-h m34b-i m34b-j m34b-k m34b-m m34b-n m34b-o m34b-p"><div className="x-text x-text-headline e4043-21 m34b-14 m34b-15 m34b-17"><div className="x-text-content"><div className="x-text-content-text"><h2 className="x-text-content-text-primary"><font >
                                                                            <font >Online marketing - Brand design

                                                                            </font>
                                                                        </font>
                                                                        </h2>
                                                                            <h3 className="x-text-content-text-subheadline">
                                                                                <font>
                                                                                    <font>
                                                                                        We design a sharp brand identity for your messages
                                                                                    </font>
                                                                                </font>
                                                                            </h3>
                                                                        </div>
                                                                        </div>
                                                                        </div>
                                                                            <a className="x-anchor x-anchor-button e4043-22 m34b-19 m34b-1b m34b-1c " tabIndex="0" href="localhost:3000">
                                                                                <div className="x-anchor-content">
                                                                                    <div className="x-anchor-text">
                                                                                        <span className="x-anchor-text-primary">
                                                                                            {/* <font >
                                                                                        <font >
                                                                                            Do you have a message that lacks design?
                                                                                        </font>
                                                                                    </font> */}
                                                                                        </span>
                                                                                    </div>
                                                                                </div>
                                                                            </a></div>
                                                                        </div><div className="x-slide e4043-23 m34b-13 m34b-3 m34b-4 x-effect-animated is-current-slide x-effect-enter" data-x-slide="" data-x-effect="{&quot;scroll&quot;:true,&quot;offsetTop&quot;:&quot;10%&quot;,&quot;offsetBottom&quot;:&quot;10%&quot;,&quot;behaviorScroll&quot;:&quot;fire-once&quot;,&quot;animationEnter&quot;:&quot;backInDown&quot;,&quot;animationExit&quot;:&quot;slideOutRight&quot;}">
                                                                            <div className="x-div e4043-24 m34b-f m34b-h m34b-i m34b-j m34b-k m34b-l m34b-m m34b-n m34b-o">
                                                                                <div className="x-text x-text-headline e4043-25 m34b-14 m34b-15 m34b-17">
                                                                                    <div className="x-text-content">
                                                                                        <div className="x-text-content-text">
                                                                                            <h2 className="x-text-content-text-primary">
                                                                                                {/* <font >
                                                                                                    <font >Online marketing - Content marketing
                                                                                                    </font>
                                                                                                </font> */}
                                                                                            </h2>
                                                                                            <h3 className="x-text-content-text-subheadline">
                                                                                                Download the app or <br />scroll down to learn more
                                                                                            </h3>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <a className="x-anchor x-anchor-button e4043-26 m34b-19 m34b-1c m34b-1f " tabIndex="0" href="https://digitypes.dk/service_kategori/content-marketing/">
                                                                                    <div className="x-anchor-content">
                                                                                        <div className="x-anchor-text">
                                                                                            <span className="x-anchor-text-primary">
                                                                                                Download APP
                                                                                            </span>
                                                                                        </div>
                                                                                    </div>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                        <div className="x-slide e4043-27 m34b-13 m34b-3 m34b-4 x-effect-exit x-effect-animated" data-x-slide="" data-x-effect="{&quot;scroll&quot;:true,&quot;offsetTop&quot;:&quot;10%&quot;,&quot;offsetBottom&quot;:&quot;10%&quot;,&quot;behaviorScroll&quot;:&quot;fire-once&quot;,&quot;animationEnter&quot;:&quot;backInDown&quot;,&quot;animationExit&quot;:&quot;slideOutRight&quot;}"><div className="x-div e4043-28 m34b-f m34b-h m34b-i m34b-j m34b-k m34b-l m34b-m m34b-n m34b-o"><div className="x-text x-text-headline e4043-29 m34b-14 m34b-15 m34b-17"><div className="x-text-content"><div className="x-text-content-text"><h2 className="x-text-content-text-primary"><font><font >Online marketing - Marketing channels</font></font></h2><h3 className="x-text-content-text-subheadline"><font ><font>We are experts in the channels the target group is in</font>
                                                                        </font>
                                                                        </h3>
                                                                        </div>
                                                                        </div>
                                                                        </div><a className="x-anchor x-anchor-button e4043-30 m34b-19 m34b-1c m34b-1g " tabIndex="0" href="https://digitypes.dk/service_kategori/marketing-kanaler/">
                                                                                <div className="x-anchor-content">
                                                                                    <div className="x-anchor-text"><span className="x-anchor-text-primary">
                                                                                        <font ><font>Shall we take a look at your marketing channels?</font>
                                                                                        </font>
                                                                                    </span>
                                                                                    </div>
                                                                                </div>
                                                                            </a>
                                                                        </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* <div className="x-div e4043-31 m34b-a m34b-f m34b-g m34b-h m34b-k m34b-q m34b-r m34b-s m34b-t m34b-5">
                                                                <a className="x-div e4043-32 m34b-a m34b-b m34b-c m34b-f m34b-g m34b-i m34b-k m34b-s m34b-u m34b-v  x-hide-lg x-hide-md x-hide-sm x-hide-xl x-hide-xs" href="https://digitypes.dk/#prev" data-x-effect-provider="colors particles effects" data-x-slide-prev="">
                                                                    <i className="x-icon e4043-33 m34b-1h m34b-1i" aria-hidden="true" data-x-icon-o="">
                                                                    </i>
                                                                </a><a className="x-div e4043-34 m34b-a m34b-b m34b-c m34b-f m34b-g m34b-i m34b-k m34b-s m34b-u m34b-w m34b-3 m34b-6 pagination x-effect-animated x-effect-enter" href="https://digitypes.dk/#next" data-x-effect-provider="colors particles effects" data-x-effect="{&quot;scroll&quot;:true,&quot;offsetTop&quot;:&quot;10%&quot;,&quot;offsetBottom&quot;:&quot;10%&quot;,&quot;behaviorScroll&quot;:&quot;fire-once&quot;,&quot;animationEnter&quot;:&quot;bounceIn&quot;,&quot;animationExit&quot;:&quot;rollOut&quot;}" data-x-slide-next="" >
                                                                    <i className="x-icon e4043-35 m34b-1h m34b-1j" aria-hidden="true" data-x-icon-o=">">
                                                                    </i>
                                                                </a>
                                                            </div> */}
                                                        </div>
                                                        <div className="x-div e4043-36 m34b-a m34b-d m34b-f m34b-h m34b-k m34b-n m34b-q m34b-t m34b-x m34b-y">
                                                            <div className="x-button">
                                                                <button className='sign-up'>Sign Up</button>
                                                            </div>
                                                            <br></br>
                                                            <div className="x-button">
                                                                <button className='log-in'>Log in</button>
                                                            </div>
                                                            <div className="x-div e4043-42 m34b-f m34b-g m34b-h m34b-i m34b-k m34b-11">
                                                                <ul className="x-slide-pagination is-row e4043-43 m34b-1l" data-x-slide-pagination="">
                                                                    <li data-x-slide-index="1" aria-label="Slide Page 1" className="">
                                                                    </li>
                                                                    <li data-x-slide-index="2" aria-label="Slide Page 2" className="">
                                                                    </li>
                                                                    <li data-x-slide-index="3" aria-label="Slide Page 3" className="">
                                                                    </li>
                                                                    <li data-x-slide-index="4" aria-label="Slide Page 4" className="">
                                                                    </li>
                                                                    <li data-x-slide-index="5" aria-label="Slide Page 5" className="is-active" aria-current="step">
                                                                    </li>
                                                                    <li data-x-slide-index="6" aria-label="Slide Page 6">
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Main;