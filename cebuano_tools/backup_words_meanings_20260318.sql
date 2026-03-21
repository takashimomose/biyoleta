--
-- PostgreSQL database dump
--

\restrict hFXbh1FJ98YgiuGQPP6znUMErcNSoAqg4jIgu0z1YF6j2L5XqAyZEeeNU2xkLFL

-- Dumped from database version 17.6
-- Dumped by pg_dump version 17.9

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: words; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.words (id, word, language, part_of_speech, created_at, category) FROM stdin;
32498	palihug	ceb	adverb	2026-03-17 06:44:16.472684	greetings
32500	dili	ceb	adverb	2026-03-17 06:44:16.743564	greetings
32502	ayaw	ceb	verb	2026-03-17 06:44:17.151742	greetings
32504	ambot	ceb	interjection	2026-03-17 06:44:17.467845	greetings
32506	mabuhi	ceb	interjection	2026-03-17 06:44:17.634888	greetings
32521	dinhi	ceb	adverb	2026-03-17 06:44:19.113724	pronouns_demonst
32523	didto	ceb	adverb	2026-03-17 06:44:19.342978	pronouns_demonst
32525	inahan	ceb	noun	2026-03-17 06:44:19.542483	family_core
32527	nanay	ceb	noun	2026-03-17 06:44:19.718028	family_core
32529	anak	ceb	noun	2026-03-17 06:44:19.874085	family_core
32531	asawa	ceb	noun	2026-03-17 06:44:20.036234	family_core
32533	lola	ceb	noun	2026-03-17 06:44:20.209919	family_core
32535	ate	ceb	noun	2026-03-17 06:44:20.402686	family_core
32537	higala	ceb	noun	2026-03-17 06:44:20.570433	family_core
32539	tiya	ceb	noun	2026-03-17 06:44:20.767736	family_extended
32541	pamangkin	ceb	noun	2026-03-17 06:44:21.043101	family_extended
32543	ginikanan	ceb	noun	2026-03-17 06:44:21.232945	family_extended
32545	silingan	ceb	noun	2026-03-17 06:44:21.486319	family_extended
32547	tigulang	ceb	noun	2026-03-17 06:44:21.668651	life_stages
32549	lalaki	ceb	noun	2026-03-17 06:44:21.86711	life_stages
32551	lawas	ceb	noun	2026-03-17 06:44:22.046295	body_external
32553	buhok	ceb	noun	2026-03-17 06:44:22.274815	body_external
32555	mata	ceb	noun	2026-03-17 06:44:22.478846	body_external
32557	ilong	ceb	noun	2026-03-17 06:44:22.687459	body_external
32559	ngipon	ceb	noun	2026-03-17 06:44:22.889749	body_external
32561	liog	ceb	noun	2026-03-17 06:44:23.064805	body_external
32563	bukton	ceb	noun	2026-03-17 06:44:23.235953	body_external
32565	tudlo	ceb	noun	2026-03-17 06:44:23.441797	body_external
32567	tiyan	ceb	noun	2026-03-17 06:44:23.638127	body_external
32569	bitiis	ceb	noun	2026-03-17 06:44:23.81263	body_external
32571	tuhod	ceb	noun	2026-03-17 06:44:24.015298	body_external
32573	utok	ceb	noun	2026-03-17 06:44:24.163442	body_internal
32575	bukog	ceb	noun	2026-03-17 06:44:24.353819	body_internal
32577	baga	ceb	noun	2026-03-17 06:44:24.563537	body_internal
32579	tutunlan	ceb	noun	2026-03-17 06:44:24.72834	body_internal
32581	ugat	ceb	noun	2026-03-17 06:44:24.975697	body_internal
32583	nalipay	ceb	adjective	2026-03-17 06:44:25.179293	emotions_positive
32585	mapainubsanon	ceb	adjective	2026-03-17 06:44:25.391499	emotions_positive
32587	mainantuson	ceb	adjective	2026-03-17 06:44:25.622307	emotions_positive
32589	maisog	ceb	adjective	2026-03-17 06:44:25.791622	emotions_positive
32591	nasuko	ceb	adjective	2026-03-17 06:44:25.993496	emotions_negative
32593	naulaw	ceb	adjective	2026-03-17 06:44:26.323142	emotions_negative
32595	naawa	ceb	adjective	2026-03-17 06:44:26.507684	emotions_negative
32597	nasubo	ceb	adjective	2026-03-17 06:44:26.708655	emotions_negative
32609	iro	ceb	noun	2026-03-17 06:44:27.801126	animals_mammals
32611	baboy	ceb	noun	2026-03-17 06:44:27.988951	animals_mammals
32613	kabayo	ceb	noun	2026-03-17 06:44:28.212744	animals_mammals
32615	kanding	ceb	noun	2026-03-17 06:44:28.413917	animals_mammals
32617	dagkong	ceb	noun	2026-03-17 06:44:28.686191	animals_mammals
32619	langgam	ceb	noun	2026-03-17 06:44:28.861172	animals_birds
32621	uwak	ceb	noun	2026-03-17 06:44:29.063642	animals_birds
32623	banog	ceb	noun	2026-03-17 06:44:29.227704	animals_birds
32625	isda	ceb	noun	2026-03-17 06:44:29.429594	animals_sea_fish
32627	tilapia	ceb	noun	2026-03-17 06:44:29.616332	animals_sea_fish
32629	alimasag	ceb	noun	2026-03-17 06:44:29.813293	animals_sea_fish
32631	lumba-lumba	ceb	noun	2026-03-17 06:44:30.025468	animals_sea_fish
32633	bitin	ceb	noun	2026-03-17 06:44:30.191321	animals_reptiles
32635	baki	ceb	noun	2026-03-17 06:44:30.397199	animals_reptiles
32637	pagong	ceb	noun	2026-03-17 06:44:30.602597	animals_reptiles
32639	alibangbang	ceb	noun	2026-03-17 06:44:30.801861	animals_insects
32641	ipis	ceb	noun	2026-03-17 06:44:30.938648	animals_insects
32643	anay	ceb	noun	2026-03-17 06:44:31.111225	animals_insects
32645	bangkaw	ceb	noun	2026-03-17 06:44:31.388403	animals_insects
32651	niyog	ceb	noun	2026-03-17 06:44:31.894428	plants_trees
32653	kawayan	ceb	noun	2026-03-17 06:44:32.099886	plants_trees
32655	akasya	ceb	noun	2026-03-17 06:44:32.272996	plants_trees
32661	mangga	ceb	noun	2026-03-17 06:44:32.848094	plants_fruits
32663	papaya	ceb	noun	2026-03-17 06:44:33.05714	plants_fruits
32665	atis	ceb	noun	2026-03-17 06:44:33.227191	plants_fruits
32667	mansanas	ceb	noun	2026-03-17 06:44:33.37007	plants_fruits
32669	ubas	ceb	noun	2026-03-17 06:44:33.537148	plants_fruits
32671	sibuyas	ceb	noun	2026-03-17 06:44:33.700648	plants_vegetables
32673	kangkong	ceb	noun	2026-03-17 06:44:33.842675	plants_vegetables
32675	sitaw	ceb	noun	2026-03-17 06:44:34.078236	plants_vegetables
32687	ulan	ceb	noun	2026-03-17 06:44:35.201201	weather_phenomena
32689	kilat	ceb	noun	2026-03-17 06:44:35.341683	weather_phenomena
32691	bagyo	ceb	noun	2026-03-17 06:44:35.517381	weather_phenomena
32693	tag-ulan	ceb	noun	2026-03-17 06:44:35.682919	weather_seasons
32695	langit	ceb	noun	2026-03-17 06:44:35.854422	weather_phenomena
32697	bukid	ceb	noun	2026-03-17 06:44:36.026179	geography_landforms
32699	kapatagan	ceb	noun	2026-03-17 06:44:36.165122	geography_landforms
32701	langob	ceb	noun	2026-03-17 06:44:36.32874	geography_landforms
32703	bato	ceb	noun	2026-03-17 06:44:36.489472	geography_landforms
32705	suba	ceb	noun	2026-03-17 06:44:36.644314	geography_coastal
32707	pulo	ceb	noun	2026-03-17 06:44:36.809616	geography_coastal
32709	kan-on	ceb	noun	2026-03-17 06:44:37.015887	food_rice_staples
32711	tinapay	ceb	noun	2026-03-17 06:44:37.219814	food_rice_staples
32601	buotan	ceb	adjective	2026-03-17 06:44:27.012859	emotions_positive
32603	matrabahoon	ceb	adjective	2026-03-17 06:44:27.182804	emotions_positive
32605	masaligan	ceb	adjective	2026-03-17 06:44:27.421726	emotions_positive
32647	itik	ceb	noun	2026-03-17 06:44:31.589591	animals_birds
32681	luya	ceb	noun	2026-03-17 06:44:34.764355	plants_vegetables
32683	anis	ceb	noun	2026-03-17 06:44:34.914988	plants_vegetables
32685	sili	ceb	noun	2026-03-17 06:44:35.065184	plants_vegetables
32677	mais	ceb	noun	2026-03-17 06:44:34.388241	plants_vegetables
32679	kamote	ceb	noun	2026-03-17 06:44:34.591059	plants_vegetables
32657	rosas	ceb	noun	2026-03-17 06:44:32.51365	plants_trees
32659	sampaguita	ceb	noun	2026-03-17 06:44:32.68594	plants_trees
32499	oo	ceb	interjection	2026-03-17 06:44:16.599337	greetings
32501	sige	ceb	interjection	2026-03-17 06:44:16.980146	greetings
32503	mao	ceb	pronoun	2026-03-17 06:44:17.25288	greetings
32505	dali	ceb	interjection	2026-03-17 06:44:17.559737	greetings
32520	kadto	ceb	pronoun	2026-03-17 06:44:19.030616	pronouns_demonst
32522	diha	ceb	adverb	2026-03-17 06:44:19.243482	pronouns_demonst
32524	pamilya	ceb	noun	2026-03-17 06:44:19.445607	family_core
32526	amahan	ceb	noun	2026-03-17 06:44:19.629515	family_core
32528	tatay	ceb	noun	2026-03-17 06:44:19.802739	family_core
32530	bana	ceb	noun	2026-03-17 06:44:19.954294	family_core
32532	lolo	ceb	noun	2026-03-17 06:44:20.123078	family_core
32534	kuya	ceb	noun	2026-03-17 06:44:20.329356	family_core
32536	manghud	ceb	noun	2026-03-17 06:44:20.47595	family_core
32538	tiyo	ceb	noun	2026-03-17 06:44:20.650677	family_extended
32540	ig-agaw	ceb	noun	2026-03-17 06:44:20.877942	family_extended
32542	managsoon	ceb	noun	2026-03-17 06:44:21.151521	family_extended
32544	apo	ceb	noun	2026-03-17 06:44:21.302468	family_extended
32546	batan-on	ceb	noun	2026-03-17 06:44:21.59487	life_stages
32548	babaye	ceb	noun	2026-03-17 06:44:21.795389	life_stages
32550	bata	ceb	noun	2026-03-17 06:44:21.968596	life_stages
32552	ulo	ceb	noun	2026-03-17 06:44:22.120544	body_external
32554	nawong	ceb	noun	2026-03-17 06:44:22.378278	body_external
32556	dalunggan	ceb	noun	2026-03-17 06:44:22.612167	body_external
32558	baba	ceb	noun	2026-03-17 06:44:22.786029	body_external
32560	dila	ceb	noun	2026-03-17 06:44:22.988359	body_external
32562	abaga	ceb	noun	2026-03-17 06:44:23.154361	body_external
32564	kamot	ceb	noun	2026-03-17 06:44:23.332214	body_external
32566	dughan	ceb	noun	2026-03-17 06:44:23.534279	body_external
32568	likod	ceb	noun	2026-03-17 06:44:23.74088	body_external
32570	tiil	ceb	noun	2026-03-17 06:44:23.910824	body_external
32572	kasingkasing	ceb	noun	2026-03-17 06:44:24.091599	body_internal
32574	dugo	ceb	noun	2026-03-17 06:44:24.25714	body_internal
32576	atay	ceb	noun	2026-03-17 06:44:24.474408	body_internal
32578	tinai	ceb	noun	2026-03-17 06:44:24.635123	body_internal
32580	panit	ceb	noun	2026-03-17 06:44:24.865369	body_internal
32582	malipayon	ceb	adjective	2026-03-17 06:44:25.068934	emotions_positive
32584	magaan	ceb	adjective	2026-03-17 06:44:25.299147	emotions_positive
32588	pasalamat	ceb	adjective	2026-03-17 06:44:25.69566	emotions_positive
32590	masulob-on	ceb	adjective	2026-03-17 06:44:25.894099	emotions_negative
32592	nahadlok	ceb	adjective	2026-03-17 06:44:26.232747	emotions_negative
32594	lagot	ceb	adjective	2026-03-17 06:44:26.417016	emotions_negative
32596	natingala	ceb	adjective	2026-03-17 06:44:26.619572	emotions_negative
32610	iring	ceb	noun	2026-03-17 06:44:27.903466	animals_mammals
32612	baka	ceb	noun	2026-03-17 06:44:28.069089	animals_mammals
32614	kalabaw	ceb	noun	2026-03-17 06:44:28.312621	animals_mammals
32616	unggoy	ceb	noun	2026-03-17 06:44:28.615316	animals_mammals
32618	karnero	ceb	noun	2026-03-17 06:44:28.75964	animals_mammals
32620	agila	ceb	noun	2026-03-17 06:44:28.99395	animals_birds
32622	pato	ceb	noun	2026-03-17 06:44:29.131698	animals_birds
32624	kalapati	ceb	noun	2026-03-17 06:44:29.339566	animals_birds
32626	bangus	ceb	noun	2026-03-17 06:44:29.505561	animals_sea_fish
32628	pusit	ceb	noun	2026-03-17 06:44:29.749254	animals_sea_fish
32630	sugpo	ceb	noun	2026-03-17 06:44:29.953532	animals_sea_fish
32632	tuna	ceb	noun	2026-03-17 06:44:30.105358	animals_sea_fish
32634	buaya	ceb	noun	2026-03-17 06:44:30.295758	animals_reptiles
32636	bayawak	ceb	noun	2026-03-17 06:44:30.49767	animals_reptiles
32638	lamok	ceb	noun	2026-03-17 06:44:30.700542	animals_insects
32640	buyog	ceb	noun	2026-03-17 06:44:30.871515	animals_insects
32642	langaw	ceb	noun	2026-03-17 06:44:31.025143	animals_insects
32644	kumo-kumo	ceb	noun	2026-03-17 06:44:31.218714	animals_insects
32650	kahoy	ceb	noun	2026-03-17 06:44:31.794785	plants_trees
32652	manga	ceb	noun	2026-03-17 06:44:31.997279	plants_trees
32654	agoho	ceb	noun	2026-03-17 06:44:32.208855	plants_trees
32660	saging	ceb	noun	2026-03-17 06:44:32.750042	plants_fruits
32662	lubi	ceb	noun	2026-03-17 06:44:32.920518	plants_fruits
32664	pinya	ceb	noun	2026-03-17 06:44:33.122751	plants_fruits
32666	guyabano	ceb	noun	2026-03-17 06:44:33.296902	plants_fruits
32668	pakwan	ceb	noun	2026-03-17 06:44:33.439206	plants_fruits
32670	kamatis	ceb	noun	2026-03-17 06:44:33.617386	plants_vegetables
32672	bawang	ceb	noun	2026-03-17 06:44:33.775447	plants_vegetables
32674	ampalaya	ceb	noun	2026-03-17 06:44:33.943898	plants_vegetables
32676	repolyo	ceb	noun	2026-03-17 06:44:34.246896	plants_vegetables
32688	hangin	ceb	noun	2026-03-17 06:44:35.266728	weather_phenomena
32690	dugdog	ceb	noun	2026-03-17 06:44:35.454312	weather_phenomena
32692	ting-init	ceb	noun	2026-03-17 06:44:35.617005	weather_seasons
32694	dag-om	ceb	noun	2026-03-17 06:44:35.789849	weather_phenomena
32696	bahala	ceb	noun	2026-03-17 06:44:35.928389	weather_phenomena
32698	bungtod	ceb	noun	2026-03-17 06:44:36.096544	geography_landforms
32700	lung-ag	ceb	noun	2026-03-17 06:44:36.243713	geography_landforms
32702	yuta	ceb	noun	2026-03-17 06:44:36.408411	geography_landforms
32704	dagat	ceb	noun	2026-03-17 06:44:36.564929	geography_coastal
32706	baybay	ceb	noun	2026-03-17 06:44:36.714706	geography_coastal
32708	pagkain	ceb	noun	2026-03-17 06:44:36.911249	food_rice_staples
32710	sinangag	ceb	noun	2026-03-17 06:44:37.11829	food_rice_staples
32712	lugaw	ceb	noun	2026-03-17 06:44:37.322782	food_rice_staples
32600	makuluganon	ceb	adjective	2026-03-17 06:44:26.912178	emotions_positive
32602	maabtik	ceb	adjective	2026-03-17 06:44:27.081952	emotions_positive
32604	mapuangoron	ceb	adjective	2026-03-17 06:44:27.262246	emotions_positive
32606	masinabuton	ceb	adjective	2026-03-17 06:44:27.527074	emotions_positive
32608	tapolan	ceb	adjective	2026-03-17 06:44:27.694546	emotions_negative
32646	manok	ceb	noun	2026-03-17 06:44:31.48554	animals_birds
32648	kuneho	ceb	noun	2026-03-17 06:44:31.65151	animals_mammals
32682	tanglad	ceb	noun	2026-03-17 06:44:34.843635	plants_vegetables
32684	paminta	ceb	noun	2026-03-17 06:44:34.997253	plants_vegetables
32686	rosemary	ceb	noun	2026-03-17 06:44:35.127673	plants_vegetables
32678	bugas	ceb	noun	2026-03-17 06:44:34.491451	plants_vegetables
32680	gabi	ceb	noun	2026-03-17 06:44:34.661881	plants_vegetables
32656	bulak	ceb	noun	2026-03-17 06:44:32.409713	plants_trees
32507	pasensya	ceb	interjection	2026-03-17 06:44:17.765128	greetings
32509	ikaw	ceb	pronoun	2026-03-17 06:44:17.972921	pronouns_personal
32511	kami	ceb	pronoun	2026-03-17 06:44:18.128517	pronouns_personal
32513	sila	ceb	pronoun	2026-03-17 06:44:18.311562	pronouns_personal
32515	nimo	ceb	pronoun	2026-03-17 06:44:18.483208	pronouns_personal
32517	nila	ceb	pronoun	2026-03-17 06:44:18.725409	pronouns_personal
32519	kana	ceb	pronoun	2026-03-17 06:44:18.932215	pronouns_demonst
32508	ako	ceb	pronoun	2026-03-17 06:44:17.87355	pronouns_personal
32510	siya	ceb	pronoun	2026-03-17 06:44:18.056407	pronouns_personal
32512	kita	ceb	pronoun	2026-03-17 06:44:18.219359	pronouns_personal
32514	nako	ceb	pronoun	2026-03-17 06:44:18.387884	pronouns_personal
32516	niya	ceb	pronoun	2026-03-17 06:44:18.587956	pronouns_personal
32518	kini	ceb	pronoun	2026-03-17 06:44:18.827236	pronouns_demonst
32713	pansit	ceb	noun	2026-03-17 06:44:37.427207	food_rice_staples
32715	adobo	ceb	noun	2026-03-17 06:44:37.613864	food_meat_dishes
32717	lechon manok	ceb	noun	2026-03-17 06:44:37.742434	food_meat_dishes
32719	kinilaw	ceb	noun	2026-03-17 06:44:37.879093	food_seafood_dishes
32721	pinirito	ceb	noun	2026-03-17 06:44:38.073506	food_seafood_dishes
32723	laswa	ceb	noun	2026-03-17 06:44:38.253867	food_veg_dishes
32725	sinigang	ceb	noun	2026-03-17 06:44:38.444342	food_soups_stews
32727	asin	ceb	noun	2026-03-17 06:44:38.655631	food_ingredients
32729	suka	ceb	noun	2026-03-17 06:44:38.884873	food_ingredients
32731	lana	ceb	noun	2026-03-17 06:44:39.045748	food_ingredients
32733	itlog	ceb	noun	2026-03-17 06:44:39.196927	food_ingredients
32735	patis	ceb	noun	2026-03-17 06:44:39.37396	food_ingredients
32737	tuba	ceb	noun	2026-03-17 06:44:39.575842	drinks_traditional
32739	lambanog	ceb	noun	2026-03-17 06:44:39.705327	drinks_traditional
32741	tsa	ceb	noun	2026-03-17 06:44:39.853632	drinks_modern
32743	gatas	ceb	noun	2026-03-17 06:44:40.016036	drinks_modern
32745	kwarto	ceb	noun	2026-03-17 06:44:40.192466	places_home
32747	kusina	ceb	noun	2026-03-17 06:44:40.3276	places_home
32749	pultahan	ceb	noun	2026-03-17 06:44:40.523115	places_home
32751	salog	ceb	noun	2026-03-17 06:44:40.706438	places_home
32753	higdaanan	ceb	noun	2026-03-17 06:44:40.846743	household_furniture
32755	silya	ceb	noun	2026-03-17 06:44:41.052812	household_furniture
32757	aparador	ceb	noun	2026-03-17 06:44:41.250836	household_furniture
32759	ospital	ceb	noun	2026-03-17 06:44:41.41933	places_community
32761	tindahan	ceb	noun	2026-03-17 06:44:41.588545	places_community
32763	parke	ceb	noun	2026-03-17 06:44:41.754182	places_community
32765	dalan	ceb	noun	2026-03-17 06:44:41.931532	places_community
32767	minuto	ceb	noun	2026-03-17 06:44:42.137993	time_clock
32769	relo	ceb	noun	2026-03-17 06:44:42.446604	time_clock
32771	gabii	ceb	noun	2026-03-17 06:44:42.618229	time_days_weeks
32773	hapon	ceb	noun	2026-03-17 06:44:42.785902	time_days_weeks
32775	Lunes	ceb	noun	2026-03-17 06:44:42.98439	time_days_weeks
32777	Miyerkoles	ceb	noun	2026-03-17 06:44:43.131133	time_days_weeks
32779	Biyernes	ceb	noun	2026-03-17 06:44:43.310127	time_days_weeks
32781	Domingo	ceb	noun	2026-03-17 06:44:43.570649	time_days_weeks
32783	bulan	ceb	noun	2026-03-17 06:44:43.719989	time_months_years
32785	ugma	ceb	adverb	2026-03-17 06:44:43.881917	time_relative
32787	karon	ceb	adverb	2026-03-17 06:44:44.031433	time_relative
32789	kaniadto	ceb	adverb	2026-03-17 06:44:44.217971	time_relative
32791	pirmi	ceb	adverb	2026-03-17 06:44:44.426318	time_frequency
32793	kanunay	ceb	adverb	2026-03-17 06:44:44.621921	time_frequency
32795	usa	ceb	number	2026-03-17 06:44:44.799522	numbers_cardinal
32797	tulo	ceb	number	2026-03-17 06:44:45.039108	numbers_cardinal
32799	lima	ceb	number	2026-03-17 06:44:45.208144	numbers_cardinal
32801	pito	ceb	number	2026-03-17 06:44:45.373276	numbers_cardinal
32803	siyam	ceb	number	2026-03-17 06:44:45.510597	numbers_cardinal
32805	onse	ceb	number	2026-03-17 06:44:45.706632	numbers_cardinal
32807	gatus	ceb	number	2026-03-17 06:44:45.852594	numbers_cardinal
32809	milyon	ceb	number	2026-03-17 06:44:45.98444	numbers_cardinal
32811	gamay	ceb	adjective	2026-03-17 06:44:46.143831	adj_size_shape
32813	mubo	ceb	adjective	2026-03-17 06:44:46.305781	adj_size_shape
32815	pig-ot	ceb	adjective	2026-03-17 06:44:46.47283	adj_size_shape
32817	nipis	ceb	adjective	2026-03-17 06:44:46.616011	adj_size_shape
32819	magaan	ceb	adjective	2026-03-17 06:44:46.778201	adj_size_shape
32821	asul	ceb	adjective	2026-03-17 06:44:46.947855	adj_colors
32823	dalag	ceb	adjective	2026-03-17 06:44:47.19007	adj_colors
32825	itom	ceb	adjective	2026-03-17 06:44:47.394579	adj_colors
32827	lila	ceb	adjective	2026-03-17 06:44:47.664638	adj_colors
32829	brown	ceb	adjective	2026-03-17 06:44:47.973712	adj_colors
32831	bulawan	ceb	adjective	2026-03-17 06:44:48.216667	adj_colors
32833	mapait	ceb	adjective	2026-03-17 06:44:48.381178	adj_taste_smell
32835	maasim	ceb	adjective	2026-03-17 06:44:48.634754	adj_taste_smell
32837	mainit	ceb	adjective	2026-03-17 06:44:48.792551	adj_temperature
32839	presko	ceb	adjective	2026-03-17 06:44:49.030559	adj_temperature
32841	daan	ceb	adjective	2026-03-17 06:44:49.202809	adj_age
32843	tigulang	ceb	adjective	2026-03-17 06:44:49.406862	adj_age
32845	gwapo	ceb	adjective	2026-03-17 06:44:49.615609	adj_beauty
32847	maayo	ceb	adjective	2026-03-17 06:44:49.775409	adj_character_good
32849	lisod	ceb	adjective	2026-03-17 06:44:49.914798	adj_character_neg
32851	mahal	ceb	adjective	2026-03-17 06:44:50.060875	adj_character_good
32853	paspas	ceb	adjective	2026-03-17 06:44:50.271933	adj_character_good
32855	kusog	ceb	adjective	2026-03-17 06:44:50.430051	adj_character_good
32857	gahi	ceb	adjective	2026-03-17 06:44:50.565212	adj_character_neg
32859	lakaw	ceb	verb	2026-03-17 06:44:50.715006	verbs_walking
32861	tindug	ceb	verb	2026-03-17 06:44:50.875064	verbs_walking
32863	balik	ceb	verb	2026-03-17 06:44:51.069427	verbs_walking
32865	layas	ceb	verb	2026-03-17 06:44:51.206066	verbs_walking
32867	gawas	ceb	verb	2026-03-17 06:44:51.351211	verbs_walking
32869	kuha	ceb	verb	2026-03-17 06:44:51.519232	verbs_hands
32871	putol	ceb	verb	2026-03-17 06:44:51.693145	verbs_hands
32873	labay	ceb	verb	2026-03-17 06:44:51.865144	verbs_hands
32875	bukas	ceb	verb	2026-03-17 06:44:52.016178	verbs_hands
32877	sulti	ceb	verb	2026-03-17 06:44:52.200074	verbs_speaking
32879	pangutana	ceb	verb	2026-03-17 06:44:52.416148	verbs_speaking
32881	tawag	ceb	verb	2026-03-17 06:44:52.610453	verbs_speaking
32883	istorya	ceb	verb	2026-03-17 06:44:52.83302	verbs_speaking
32885	kaon	ceb	verb	2026-03-17 06:44:53.000303	verbs_cooking
32887	luto	ceb	verb	2026-03-17 06:44:53.20049	verbs_cooking
32889	laga	ceb	verb	2026-03-17 06:44:53.365207	verbs_cooking
32891	palita	ceb	verb	2026-03-17 06:44:53.524637	verbs_trade
32893	bayad	ceb	verb	2026-03-17 06:44:53.809832	verbs_trade
32895	presyo	ceb	noun	2026-03-17 06:44:53.972865	verbs_trade
32897	trabaho	ceb	verb	2026-03-17 06:44:54.153069	verbs_trade
32899	sugod	ceb	verb	2026-03-17 06:44:54.346439	verbs_start_stop
32901	hunong	ceb	verb	2026-03-17 06:44:54.562965	verbs_start_stop
32903	naa	ceb	verb	2026-03-17 06:44:54.765493	verbs_exist_have
32905	aduna	ceb	verb	2026-03-17 06:44:54.972242	verbs_exist_have
32907	unsa	ceb	pronoun	2026-03-17 06:44:55.137785	question_words
32909	kanus-a	ceb	adverb	2026-03-17 06:44:55.337248	question_words
32911	pila	ceb	adjective	2026-03-17 06:44:55.483806	question_words
32913	hain	ceb	adverb	2026-03-17 06:44:55.651297	question_words
32915	kinsay	ceb	pronoun	2026-03-17 06:44:55.783475	question_words
32714	lechon	ceb	noun	2026-03-17 06:44:37.529251	food_meat_dishes
32716	humba	ceb	noun	2026-03-17 06:44:37.676906	food_meat_dishes
32718	sinugba	ceb	noun	2026-03-17 06:44:37.810994	food_seafood_dishes
32720	sinuglaw	ceb	noun	2026-03-17 06:44:37.952217	food_seafood_dishes
32722	ginisang gulay	ceb	noun	2026-03-17 06:44:38.144534	food_veg_dishes
32724	sabaw	ceb	noun	2026-03-17 06:44:38.346703	food_soups_stews
32726	nilaga	ceb	noun	2026-03-17 06:44:38.586698	food_soups_stews
32728	asukar	ceb	noun	2026-03-17 06:44:38.82061	food_ingredients
32730	toyo	ceb	noun	2026-03-17 06:44:38.960756	food_ingredients
32732	bawang	ceb	noun	2026-03-17 06:44:39.117171	food_ingredients
32734	gata	ceb	noun	2026-03-17 06:44:39.268385	food_ingredients
32736	bagoong	ceb	noun	2026-03-17 06:44:39.474789	food_fermented
32738	basi	ceb	noun	2026-03-17 06:44:39.638033	drinks_traditional
32740	kape	ceb	noun	2026-03-17 06:44:39.784592	drinks_modern
32742	tubig	ceb	noun	2026-03-17 06:44:39.922427	drinks_modern
32744	balay	ceb	noun	2026-03-17 06:44:40.08754	places_home
32746	sala	ceb	noun	2026-03-17 06:44:40.262067	places_home
32748	banyo	ceb	noun	2026-03-17 06:44:40.446226	places_home
32750	bintana	ceb	noun	2026-03-17 06:44:40.603159	places_home
32752	atop	ceb	noun	2026-03-17 06:44:40.772089	places_home
32754	mesa	ceb	noun	2026-03-17 06:44:40.942138	household_furniture
32756	sopa	ceb	noun	2026-03-17 06:44:41.145378	household_furniture
32758	eskwelahan	ceb	noun	2026-03-17 06:44:41.313868	places_community
32760	simbahan	ceb	noun	2026-03-17 06:44:41.519373	places_community
32762	palengke	ceb	noun	2026-03-17 06:44:41.67929	places_community
32764	plasa	ceb	noun	2026-03-17 06:44:41.831518	places_community
32766	oras	ceb	noun	2026-03-17 06:44:42.038763	time_clock
32768	segundo	ceb	noun	2026-03-17 06:44:42.269817	time_clock
32770	adlaw	ceb	noun	2026-03-17 06:44:42.549294	time_days_weeks
32772	buntag	ceb	noun	2026-03-17 06:44:42.692332	time_days_weeks
32774	semana	ceb	noun	2026-03-17 06:44:42.899607	time_days_weeks
32776	Martes	ceb	noun	2026-03-17 06:44:43.061099	time_days_weeks
32778	Huwebes	ceb	noun	2026-03-17 06:44:43.201946	time_days_weeks
32780	Sabado	ceb	noun	2026-03-17 06:44:43.468673	time_days_weeks
32782	tuig	ceb	noun	2026-03-17 06:44:43.635252	time_months_years
32784	dekada	ceb	noun	2026-03-17 06:44:43.811078	time_months_years
32786	gahapon	ceb	adverb	2026-03-17 06:44:43.964719	time_relative
32788	sunod	ceb	adverb	2026-03-17 06:44:44.109603	time_relative
32790	bag-ohay	ceb	adverb	2026-03-17 06:44:44.290013	time_relative
32792	usahay	ceb	adverb	2026-03-17 06:44:44.521456	time_frequency
32794	bihira	ceb	adverb	2026-03-17 06:44:44.697493	time_frequency
32796	duha	ceb	number	2026-03-17 06:44:44.928289	numbers_cardinal
32798	upat	ceb	number	2026-03-17 06:44:45.138851	numbers_cardinal
32800	unom	ceb	number	2026-03-17 06:44:45.30881	numbers_cardinal
32802	walo	ceb	number	2026-03-17 06:44:45.443901	numbers_cardinal
32804	napulo	ceb	number	2026-03-17 06:44:45.585731	numbers_cardinal
32806	dose	ceb	number	2026-03-17 06:44:45.774454	numbers_cardinal
32808	libo	ceb	number	2026-03-17 06:44:45.919355	numbers_cardinal
32810	dako	ceb	adjective	2026-03-17 06:44:46.05628	adj_size_shape
32812	taas	ceb	adjective	2026-03-17 06:44:46.23467	adj_size_shape
32814	lapad	ceb	adjective	2026-03-17 06:44:46.374443	adj_size_shape
32816	baga	ceb	adjective	2026-03-17 06:44:46.540254	adj_size_shape
32818	bug-at	ceb	adjective	2026-03-17 06:44:46.693979	adj_size_shape
32820	pula	ceb	adjective	2026-03-17 06:44:46.844291	adj_colors
32822	berde	ceb	adjective	2026-03-17 06:44:47.088084	adj_colors
32824	puti	ceb	adjective	2026-03-17 06:44:47.294023	adj_colors
32826	orange	ceb	adjective	2026-03-17 06:44:47.514289	adj_colors
32828	rosas	ceb	adjective	2026-03-17 06:44:47.818222	adj_colors
32830	abohon	ceb	adjective	2026-03-17 06:44:48.137644	adj_colors
32832	lami	ceb	adjective	2026-03-17 06:44:48.291187	adj_taste_smell
32834	matamis	ceb	adjective	2026-03-17 06:44:48.513611	adj_taste_smell
32836	maasin	ceb	adjective	2026-03-17 06:44:48.722947	adj_taste_smell
32838	bugnaw	ceb	adjective	2026-03-17 06:44:48.894653	adj_temperature
32840	bag-o	ceb	adjective	2026-03-17 06:44:49.10523	adj_age
32842	bata	ceb	adjective	2026-03-17 06:44:49.303194	adj_age
32844	gwapa	ceb	adjective	2026-03-17 06:44:49.505685	adj_beauty
32846	matahom	ceb	adjective	2026-03-17 06:44:49.706049	adj_beauty
32848	daotan	ceb	adjective	2026-03-17 06:44:49.849089	adj_character_neg
32850	sayon	ceb	adjective	2026-03-17 06:44:49.978647	adj_character_neg
32852	barato	ceb	adjective	2026-03-17 06:44:50.202647	adj_character_good
32854	hinay	ceb	adjective	2026-03-17 06:44:50.356433	adj_character_good
32856	humok	ceb	adjective	2026-03-17 06:44:50.49852	adj_character_good
32858	dili tinuod	ceb	adjective	2026-03-17 06:44:50.646543	adj_character_neg
32860	dagan	ceb	verb	2026-03-17 06:44:50.779482	verbs_walking
32862	lingkod	ceb	verb	2026-03-17 06:44:50.942092	verbs_walking
32864	adto	ceb	verb	2026-03-17 06:44:51.137298	verbs_walking
32866	sulod	ceb	verb	2026-03-17 06:44:51.279978	verbs_walking
32868	lupad	ceb	verb	2026-03-17 06:44:51.454455	verbs_walking
32870	hatag	ceb	verb	2026-03-17 06:44:51.586723	verbs_hands
32872	gunit	ceb	verb	2026-03-17 06:44:51.762313	verbs_hands
32874	hipos	ceb	verb	2026-03-17 06:44:51.942599	verbs_hands
32876	sirado	ceb	verb	2026-03-17 06:44:52.118865	verbs_hands
32878	dungog	ceb	verb	2026-03-17 06:44:52.306525	verbs_speaking
32880	tubag	ceb	verb	2026-03-17 06:44:52.537425	verbs_speaking
32882	singgit	ceb	verb	2026-03-17 06:44:52.723651	verbs_speaking
32884	ampo	ceb	verb	2026-03-17 06:44:52.922208	verbs_speaking
32886	inom	ceb	verb	2026-03-17 06:44:53.122349	verbs_cooking
32888	prito	ceb	verb	2026-03-17 06:44:53.297557	verbs_cooking
32890	sugba	ceb	verb	2026-03-17 06:44:53.437963	verbs_cooking
32892	baligya	ceb	verb	2026-03-17 06:44:53.713523	verbs_trade
32894	utang	ceb	noun	2026-03-17 06:44:53.911727	verbs_trade
32896	diskwento	ceb	noun	2026-03-17 06:44:54.0532	verbs_trade
32898	kwarta	ceb	noun	2026-03-17 06:44:54.221929	verbs_trade
32900	human	ceb	verb	2026-03-17 06:44:54.45907	verbs_start_stop
32902	padayon	ceb	verb	2026-03-17 06:44:54.662637	verbs_start_stop
32904	wala	ceb	verb	2026-03-17 06:44:54.870606	verbs_exist_have
32906	kinsa	ceb	pronoun	2026-03-17 06:44:55.072517	question_words
32908	diin	ceb	adverb	2026-03-17 06:44:55.204411	question_words
32910	ngano	ceb	adverb	2026-03-17 06:44:55.410033	question_words
32912	unsaon	ceb	adverb	2026-03-17 06:44:55.565696	question_words
32914	unsa man	ceb	phrase	2026-03-17 06:44:55.719554	question_words
32916	ug	ceb	conjunction	2026-03-17 06:44:55.858389	conjunctions
32917	o	ceb	conjunction	2026-03-17 06:44:55.938395	conjunctions
32919	kay	ceb	conjunction	2026-03-17 06:44:56.097175	conjunctions
32921	para	ceb	conjunction	2026-03-17 06:44:56.271691	conjunctions
32923	samtang	ceb	conjunction	2026-03-17 06:44:56.471233	conjunctions
32925	na	ceb	particle	2026-03-17 06:44:56.611612	discourse_particles
32927	man	ceb	particle	2026-03-17 06:44:56.780812	discourse_particles
32929	gyud	ceb	particle	2026-03-17 06:44:56.986738	discourse_particles
32931	gani	ceb	particle	2026-03-17 06:44:57.197562	discourse_particles
32933	sus	ceb	interjection	2026-03-17 06:44:57.362474	interjections
32935	abay	ceb	interjection	2026-03-17 06:44:57.599049	interjections
32937	nindot	ceb	adjective	2026-03-17 06:44:57.838628	interjections
32939	daghan	ceb	adjective	2026-03-17 06:44:58.037023	adverbs_degree
32941	tanan	ceb	pronoun	2026-03-17 06:44:58.177303	adverbs_degree
32943	tinuod	ceb	adjective	2026-03-17 06:44:58.415308	adverbs_degree
32945	siguro	ceb	adverb	2026-03-17 06:44:58.620794	adverbs_degree
32947	klaro	ceb	adjective	2026-03-17 06:44:58.82817	adverbs_degree
32949	espesyal	ceb	adjective	2026-03-17 06:44:59.031826	adverbs_degree
32951	ilawom	ceb	adverb	2026-03-17 06:44:59.235425	prepositions
32953	luyo	ceb	adverb	2026-03-17 06:44:59.473736	prepositions
32955	taliwala	ceb	adverb	2026-03-17 06:44:59.615739	prepositions
32957	duol	ceb	adjective	2026-03-17 06:44:59.764321	prepositions
32959	wala	ceb	adjective	2026-03-17 06:44:59.909305	prepositions
32961	habagatan	ceb	noun	2026-03-17 06:45:00.055653	prepositions
32963	kasadpan	ceb	noun	2026-03-17 06:45:00.260646	prepositions
32965	pagmahal	ceb	noun	2026-03-17 06:45:00.46815	music_arts
32967	sayaw	ceb	noun	2026-03-17 06:45:00.610972	music_arts
32969	harana	ceb	noun	2026-03-17 06:45:00.759285	music_arts
32971	telepono	ceb	noun	2026-03-17 06:45:01.010402	technology_general
32973	internet	ceb	noun	2026-03-17 06:45:01.19017	technology_general
32975	fiesta	ceb	noun	2026-03-17 06:45:01.348541	festivals_events
32977	Pascua	ceb	noun	2026-03-17 06:45:01.523048	festivals_events
32979	bakak	ceb	adjective	2026-03-17 06:45:01.693239	proverbs_idioms
32981	pasalamat	ceb	noun	2026-03-17 06:45:01.8323	festivals_events
32983	nagtuo	ceb	verb	2026-03-17 06:45:02.051582	mental_states
32985	damgo	ceb	noun	2026-03-17 06:45:02.343391	mental_states
32987	sakit	ceb	noun	2026-03-17 06:45:02.546429	health_illness
32989	ubo	ceb	noun	2026-03-17 06:45:02.763379	health_illness
32991	samad	ceb	noun	2026-03-17 06:45:02.953684	health_illness
32993	tambal	ceb	noun	2026-03-17 06:45:03.161402	health_treatment
32995	nars	ceb	noun	2026-03-17 06:45:03.332771	professions_1
32997	maestra	ceb	noun	2026-03-17 06:45:03.5411	professions_1
32999	estudyante	ceb	noun	2026-03-17 06:45:03.678977	education_school
33001	lapis	ceb	noun	2026-03-17 06:45:03.897311	education_school
33003	bolpen	ceb	noun	2026-03-17 06:45:04.049313	education_school
33005	sinina	ceb	noun	2026-03-17 06:45:04.269482	clothing_everyday
33007	karsones	ceb	noun	2026-03-17 06:45:04.426016	clothing_everyday
33009	tsinelas	ceb	noun	2026-03-17 06:45:04.594422	clothing_everyday
33011	sakyanan	ceb	noun	2026-03-17 06:45:04.769447	transport_land
33013	motor	ceb	noun	2026-03-17 06:45:04.966864	transport_land
33015	bus	ceb	noun	2026-03-17 06:45:05.141342	transport_land
33017	bisikleta	ceb	noun	2026-03-17 06:45:05.313703	transport_land
33019	barko	ceb	noun	2026-03-17 06:45:05.48133	transport_sea
33021	eroplano	ceb	noun	2026-03-17 06:45:05.648466	transport_air
33023	simbahan	ceb	noun	2026-03-17 06:45:05.804558	religion_christian
33025	pari	ceb	noun	2026-03-17 06:45:05.994486	religion_christian
33027	panalangin	ceb	noun	2026-03-17 06:45:06.163996	religion_christian
32918	pero	ceb	conjunction	2026-03-17 06:44:56.003349	conjunctions
32920	bisan	ceb	conjunction	2026-03-17 06:44:56.168232	conjunctions
32922	kung	ceb	conjunction	2026-03-17 06:44:56.354324	conjunctions
32924	ra	ceb	particle	2026-03-17 06:44:56.536892	discourse_particles
32926	pa	ceb	particle	2026-03-17 06:44:56.681732	discourse_particles
32928	ba	ceb	particle	2026-03-17 06:44:56.882091	discourse_particles
32930	bitaw	ceb	particle	2026-03-17 06:44:57.084986	discourse_particles
32932	hay	ceb	interjection	2026-03-17 06:44:57.295092	interjections
32934	hala	ceb	interjection	2026-03-17 06:44:57.497249	interjections
32936	yawa	ceb	interjection	2026-03-17 06:44:57.702626	interjections
32938	kaayo	ceb	adverb	2026-03-17 06:44:57.908646	adverbs_degree
32940	diyutay	ceb	adjective	2026-03-17 06:44:58.114075	adverbs_degree
32942	kaayo	ceb	adverb	2026-03-17 06:44:58.320574	adverbs_degree
32944	sigurado	ceb	adjective	2026-03-17 06:44:58.548059	adverbs_degree
32946	tingali	ceb	adverb	2026-03-17 06:44:58.751038	adverbs_degree
32948	importante	ceb	adjective	2026-03-17 06:44:58.929917	adverbs_degree
32950	ibabaw	ceb	adverb	2026-03-17 06:44:59.136617	prepositions
32952	atubangan	ceb	adverb	2026-03-17 06:44:59.372161	prepositions
32954	tupad	ceb	adverb	2026-03-17 06:44:59.545299	prepositions
32956	layo	ceb	adjective	2026-03-17 06:44:59.687135	prepositions
32958	tuo	ceb	adjective	2026-03-17 06:44:59.849801	prepositions
32960	amihanan	ceb	noun	2026-03-17 06:44:59.979416	prepositions
32962	sidlakan	ceb	noun	2026-03-17 06:45:00.134401	prepositions
32964	higugma	ceb	verb	2026-03-17 06:45:00.341136	music_arts
32966	kanta	ceb	noun	2026-03-17 06:45:00.538454	music_arts
32968	musika	ceb	noun	2026-03-17 06:45:00.684278	music_arts
32970	litrato	ceb	noun	2026-03-17 06:45:00.90624	technology_general
32972	kompyuter	ceb	noun	2026-03-17 06:45:01.085236	technology_general
32974	Sinulog	ceb	noun	2026-03-17 06:45:01.284748	festivals_events
32976	Pasko	ceb	noun	2026-03-17 06:45:01.424998	festivals_events
32978	tinuod	ceb	adjective	2026-03-17 06:45:01.59331	proverbs_idioms
32980	bayanihan	ceb	noun	2026-03-17 06:45:01.760545	proverbs_idioms
32982	hunahuna	ceb	noun	2026-03-17 06:45:01.934315	mental_states
32984	nagduhaduha	ceb	verb	2026-03-17 06:45:02.214131	mental_states
32986	pag-asa	ceb	noun	2026-03-17 06:45:02.44854	mental_states
32988	hilanat	ceb	noun	2026-03-17 06:45:02.65179	health_illness
32990	sip-on	ceb	noun	2026-03-17 06:45:02.861627	health_illness
32994	doktor	ceb	noun	2026-03-17 06:45:03.234207	professions_1
32996	maestro	ceb	noun	2026-03-17 06:45:03.442761	professions_1
32998	abogado	ceb	noun	2026-03-17 06:45:03.605841	professions_1
33000	libro	ceb	noun	2026-03-17 06:45:03.780676	education_school
33002	papel	ceb	noun	2026-03-17 06:45:03.976505	education_school
33004	klase	ceb	noun	2026-03-17 06:45:04.156682	education_school
33006	kamiseta	ceb	noun	2026-03-17 06:45:04.357687	clothing_everyday
33008	sapatos	ceb	noun	2026-03-17 06:45:04.494524	clothing_everyday
33010	medyas	ceb	noun	2026-03-17 06:45:04.6668	clothing_everyday
33012	kotse	ceb	noun	2026-03-17 06:45:04.870176	transport_land
33014	dyipni	ceb	noun	2026-03-17 06:45:05.053149	transport_land
33016	trisiklo	ceb	noun	2026-03-17 06:45:05.223121	transport_land
33018	taksi	ceb	noun	2026-03-17 06:45:05.394838	transport_land
33020	bangka	ceb	noun	2026-03-17 06:45:05.569553	transport_sea
33022	tugpahanan	ceb	noun	2026-03-17 06:45:05.726382	transport_air
33024	Dios	ceb	noun	2026-03-17 06:45:05.89661	religion_christian
33026	misa	ceb	noun	2026-03-17 06:45:06.096903	religion_christian
32992	himsog	ceb	adjective	2026-03-17 06:45:03.040927	adj_physical_state
32598	lain	ceb	adjective	2026-03-17 06:44:26.77736	emotions_negative
32599	nasakit	ceb	adjective	2026-03-17 06:44:26.845098	emotions_negative
32607	bastos	ceb	adjective	2026-03-17 06:44:27.622008	emotions_negative
32586	buotan	ceb	adjective	2026-03-17 06:44:25.553149	emotions_positive
32658	santan	ceb	noun	2026-03-17 06:44:32.612027	plants_trees
32496	kumusta	ceb	interjection	2026-03-17 06:44:16.184476	greetings
32497	salamat	ceb	interjection	2026-03-17 06:44:16.346042	greetings
\.


--
-- Data for Name: meanings; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.meanings (id, word_id, meaning_en, meaning_ja, example) FROM stdin;
32608	32608	lazy	怠惰な	Tapolan ang estudyante.
32496	32496	hello, how are you	こんにちは・元気ですか	Kumusta ka?
32498	32498	please	お願いします	Palihug tabang.
32500	32500	no	いいえ	Dili ko gusto.
32502	32502	don't	やめて・〜しないで	Ayaw hilak.
32504	32504	I don't know	わかりません	Ambot nako.
32519	32519	that (near listener)	それ	Kana ang imong kuwarta.
32521	32521	here	ここ	Dinhi ko nagpuyo.
32523	32523	there (far)	あそこ	Didto ang merkado.
32525	32525	mother	母	Ang akong inahan maayo magluto.
32527	32527	mom	お母さん	Nanay adto sa palengke.
32529	32529	child, son, daughter	子供・息子・娘	Usa ka anak.
32531	32531	spouse, wife	配偶者・妻	Si Maria ang akong asawa.
32533	32533	grandmother	おばあさん	Ang lola maayo magluto.
32535	32535	older sister	お姉さん	Si Ate gwapa.
32537	32537	friend	友達	Siya ang akong higala.
32539	32539	aunt	おばさん	Si Tiya nagdala og pagkain.
32541	32541	nephew, niece	甥・姪	Ang akong pamangkin bata pa.
32543	32543	parents	両親	Ang akong ginikanan maayo.
32545	32545	neighbor	隣人	Maayo ang akong silingan.
32547	32547	old person, elderly	老人・お年寄り	Ang tigulang naghilak.
32549	32549	man, male	男性・男	Si Juan lalaki.
32551	32551	body	体	Ang lawas kinahanglan og pahulayan.
32553	32553	hair	髪の毛	Ang iyang buhok taas.
32555	32555	eye	目	Itom ang iyang mata.
32557	32557	nose	鼻	Taas ang iyang ilong.
32559	32559	teeth	歯	Limpyo ang iyang ngipon.
32561	32561	neck	首	Ang akong liog sakit.
32563	32563	arm	腕	Kusog ang iyang bukton.
32565	32565	finger	指	Upat ka tudlo.
32567	32567	stomach	お腹	Sakit ang akong tiyan.
32569	32569	leg	脚	Taas ang iyang bitiis.
32571	32571	knee	膝	Sakit ang akong tuhod.
32573	32573	brain	脳	Ang utok naghunahuna.
32575	32575	bone	骨	Gahi ang bukog.
32577	32577	lungs	肺	Ang baga nagpaginhawa.
32579	32579	throat	喉	Sakit ang akong tutunlan.
32581	32581	vein/nerve	血管・神経	Ang ugat mosangpot sa kasingkasing.
32583	32583	glad/pleased	嬉しい	Nalipay ko nimo.
32585	32585	humble	謙虚な	Mapainubsanon siya.
32587	32587	patient	忍耐強い	Mainantuson siya sa trabaho.
32589	32589	brave	勇敢な	Maisog ang sundalo.
32591	32591	angry	怒っている	Nasuko ang maestro.
32593	32593	embarrassed/shy	恥ずかしい	Naulaw siya sa klase.
32595	32595	pitiful/sympathetic	かわいそうな・同情する	Naawa ko kanila.
32597	32597	grieved/upset	悲しんでいる	Nasubo siya sa nahitabo.
32599	32599	hurt/offended	傷ついた	Nasakit ang akong dughan.
32601	32601	kind, good person	親切な・善良な	Buotan kaayo siya.
32603	32603	hardworking	勤勉な	Matrabahoon ang magsasaka.
32605	32605	trustworthy	信頼できる	Masaligan nga tawo.
32607	32607	rude	失礼な	Bastos ang iyang sinulti.
32609	32609	dog	犬	Ang iro nagbuhi sa balay.
32611	32611	pig	豚	Ang baboy tambok.
32613	32613	horse	馬	Paspas ang kabayo.
32615	32615	goat	ヤギ	Ang kanding nagkaon sa bukid.
32617	32617	mouse/rat	ネズミ	Ang dagkong nagkaon sa kan-on.
32619	32619	bird	鳥	Ang langgam nagkanta.
32621	32621	crow	カラス	Itom ang uwak.
32623	32623	hawk/kite	タカ・トビ	Ang banog naglupad.
32625	32625	fish	魚	Lami ang isda.
32627	32627	tilapia	ティラピア	Nilagang tilapia.
32629	32629	crab	カニ	Ang alimasag sa dagat.
32631	32631	dolphin	イルカ	Ang lumba-lumba naglupad sa tubig.
32633	32633	snake	ヘビ	Ang bitin makahadlok.
32635	32635	frog	カエル	Ang baki nagkanta sa ulan.
32637	32637	turtle	カメ	Hinay ang pagong.
32639	32639	butterfly	チョウ	Nindot ang alibangbang.
32641	32641	cockroach	ゴキブリ	Ang ipis dili maayo.
32643	32643	termite	シロアリ	Ang anay nagkuha sa kahoy.
32645	32645	dragonfly	トンボ	Ang bangkaw nalupad sa sapa.
32647	32647	native duck	在来種のアヒル	Ang itik naglakaw sa sapa.
32651	32651	coconut tree	ヤシの木	Ang niyog taas kaayo.
32653	32653	bamboo	竹	Ang kawayan gahi.
32655	32655	acacia tree	アカシアの木	Ang akasya daghan og dahon.
32657	32657	rose	バラ	Pula ang rosas.
32659	32659	sampaguita flower	サンパギータ	Humot ang sampaguita.
32661	32661	mango	マンゴー	Tam-is ang mangga.
32663	32663	papaya	パパイヤ	Madilabon ang papaya.
32665	32665	sugar apple	シュガーアップル	Tam-is ang atis.
32667	32667	apple	リンゴ	Pula ang mansanas.
32669	32669	grapes	ブドウ	Lila ang ubas.
32671	32671	onion	玉ねぎ	Ang sibuyas nga paboritong sangkap.
32673	32673	water spinach	空芯菜	Lami ang ginisang kangkong.
32675	32675	string beans	ささげ・インゲン	Lami ang ginisang sitaw.
32677	32677	corn	トウモロコシ	Tam-is ang mais.
32679	32679	sweet potato	サツマイモ	Tam-is ang kamote.
32681	32681	ginger	生姜	Ang luya tambal.
32683	32683	anise	アニス	Ang anis humot.
32685	32685	chili pepper	唐辛子	Mainit ang sili.
32687	32687	rain	雨	Nag-ulan kagabi.
32689	32689	lightning	稲妻	Nagkidlap ang kilat.
32691	32691	typhoon, storm	台風・嵐	Ang bagyo nagabot.
32693	32693	rainy season	雨季	Ulan pirmi sa tag-ulan.
32695	32695	sky, heaven	空・天国	Asul ang langit.
32697	32697	mountain	山	Taas ang bukid.
32699	32699	plain/flatland	平野	Dako ang kapatagan.
32701	32701	cave	洞窟	Ngitngit ang langob.
32703	32703	rock, stone	岩・石	Gahi ang bato.
32705	32705	river	川	Naglangoy siya sa suba.
32707	32707	island	島	Nindot ang pulo.
32497	32497	thank you	ありがとう	Salamat kaayo.
32499	32499	yes	はい	Oo sige.
32501	32501	okay, go ahead	オーケー・どうぞ	Sige na!
32503	32503	that's it, yes exactly	その通り・そうです	Mao gyud.
32505	32505	come here, hurry	来て・急いで	Dali na!
32520	32520	that (far)	あれ	Kadto ang among eskwelahan.
32522	32522	there (near)	そこ	Diha siya nalingkod.
32524	32524	family	家族	Ang akong pamilya dako.
32526	32526	father	父	Ang akong amahan trabahador.
32528	32528	dad	お父さん	Tatay nagbuhat og balay.
32530	32530	husband	夫	Ang akong bana maayo.
32532	32532	grandfather	おじいさん	Ang lolo tigulang na.
32534	32534	older brother	お兄さん	Si Kuya nagdagan.
32536	32536	younger sibling	弟・妹	Ang akong manghud estudyante.
32538	32538	uncle	おじさん	Ang tiyo naa sa Maynila.
32540	32540	cousin	いとこ	Ang akong ig-agaw nindot.
32542	32542	siblings	兄弟姉妹	Tulo kami managsoon.
32544	32544	grandchild	孫	Ang apo sa akong lola.
32546	32546	young person, youth	若者	Batan-on pa siya.
32548	32548	woman, female	女性・女	Si Maria babaye.
32550	32550	child	子供	Ang bata naglaro.
32552	32552	head	頭	Sakit ang akong ulo.
32554	32554	face	顔	Nindot ang iyang nawong.
32556	32556	ear	耳	Dako ang iyang dalunggan.
32558	32558	mouth	口	Abli ang iyang baba.
32560	32560	tongue	舌	Ang dila importante sa pagsulti.
32562	32562	shoulder	肩	Lapad ang iyang abaga.
32564	32564	hand	手	Hinay ang iyang kamot.
32566	32566	chest	胸	Lapad ang iyang dughan.
32568	32568	back	背中	Ang akong likod sakit.
32570	32570	foot	足	Hugaw ang iyang tiil.
32572	32572	heart	心臓	Ang kasingkasing importante.
32574	32574	blood	血	Pula ang dugo.
32576	32576	liver	肝臓	Ang atay nagproseso sa pagkain.
32578	32578	intestines	腸	Ang tinai importante.
32580	32580	skin	皮膚	Maputi ang iyang panit.
32582	32582	happy	幸せな	Malipayon siya karon.
32584	32584	light-hearted, relieved	気が楽になった・安心した	Magaan na ang akong dughan.
32586	32586	kind, good-natured	優しい・親切な	Buotan ang maestro.
32588	32588	grateful	感謝している	Pasalamat ko nimo.
32590	32590	sad	悲しい	Masulob-on siya karon.
32592	32592	afraid/scared	怖い・恐れている	Nahadlok ang bata.
32594	32594	annoyed/frustrated	イライラする	Lagot ko nimo.
32596	32596	surprised	驚いた	Natingala siya sa balita.
32598	32598	weird/different/uncomfortable	変な・違和感のある	Lain ang iyang gibati.
32600	32600	longing/nostalgic	恋しい・懐かしい	Makuluganon ang iyang kanta.
32602	32602	smart, clever	賢い・頭の良い	Maabtik ang estudyante.
32604	32604	caring/loving	愛情深い	Mapuangoron ang nanay.
32606	32606	understanding	理解力がある	Masinabuton ang iyang bana.
32506	32506	long live, cheers	万歳・乾杯	Mabuhi ang Pilipinas!
32508	32508	I, me	私・僕	Ako si Juan.
32510	32510	he, she, it	彼・彼女・それ	Siya ang doktor.
32512	32512	we, us (inclusive)	私たち（相手を含む）	Kita magsugod na.
32514	32514	my, mine	私の	Nako ning balay.
32516	32516	his, her, its	彼の・彼女の	Niya ang libro.
32518	32518	this (near speaker)	これ	Kini ang akong balay.
32507	32507	sorry, pardon me	すみません・ごめんなさい	Pasensya na.
32509	32509	you	あなた	Ikaw ang magbuhat.
32511	32511	we, us (exclusive)	私たち（相手を含まない）	Kami ang nakabuhat.
32513	32513	they, them	彼ら・彼女ら	Sila ang akong mga higala.
32515	32515	your, yours	あなたの	Nimo ba ni?
32517	32517	their, theirs	彼らの	Nila ang dula.
32610	32610	cat	猫	Ang iring natulog.
32612	32612	cow	牛	Ang baka nagkaon og sagbot.
32614	32614	carabao, water buffalo	カラバオ・水牛	Ang kalabaw magtrabaho sa uma.
32616	32616	monkey	サル	Ang unggoy nagkuha og prutas.
32618	32618	sheep	羊	Puti ang karnero.
32620	32620	eagle	鷲	Ang agila lumapad.
32622	32622	duck	アヒル	Ang pato naligo sa suba.
32624	32624	dove/pigeon	鳩	Puti ang kalapati.
32626	32626	milkfish	バングス・ミルクフィッシュ	Lami ang bangus sa grill.
32628	32628	squid	イカ	Piniritong pusit.
32630	32630	prawn/shrimp	エビ	Lutong sugpo.
32632	32632	tuna	マグロ	Lami ang tuna.
32634	32634	crocodile	ワニ	Ang buaya sa sapa.
32636	32636	monitor lizard	オオトカゲ	Dako ang bayawak.
32638	32638	mosquito	蚊	Ang lamok makadangat og sakit.
32640	32640	bee	ハチ	Ang buyog nagbuhat og dugos.
32642	32642	fly	ハエ	Ang langaw hugaw.
32644	32644	ant	アリ	Gamay ang kumo-kumo.
32646	32646	chicken, rooster	鶏	Ang manok nagpuyo sa uma.
32648	32648	rabbit	ウサギ	Puti ang kuneho.
32650	32650	tree, wood	木・材木	Taas ang kahoy.
32652	32652	mango tree	マンゴーの木	Ang manga namunga.
32654	32654	pine-like tree	松に似た木	Ang agoho taas.
32656	32656	flower	花	Nindot ang bulak.
32658	32658	ixora flower	サンタンの花	Pula ang santan.
32660	32660	banana	バナナ	Tam-is ang saging.
32662	32662	coconut	ナッツ・ヤシの実	Tam-is ang tubig sa lubi.
32664	32664	pineapple	パイナップル	Maasim ang pinya.
32666	32666	soursop	グヤバノ	Maasim-tam-is ang guyabano.
32668	32668	watermelon	スイカ	Tam-is ang pakwan.
32670	32670	tomato	トマト	Pula ang kamatis.
32672	32672	garlic	ニンニク	Ang bawang mapungot.
32674	32674	bitter melon	ゴーヤ	Mapait ang ampalaya.
32676	32676	cabbage	キャベツ	Puti ang repolyo.
32678	32678	raw rice	生米	Lutoa ang bugas.
32680	32680	taro	タロイモ	Ang gabi malusog.
32682	32682	lemongrass	レモングラス	Humot ang tanglad.
32684	32684	pepper	コショウ	Mainit ang paminta.
32686	32686	rosemary	ローズマリー	Humot ang rosemary.
32688	32688	wind	風	Kusog ang hangin.
32690	32690	thunder	雷	Kusog ang dugdog.
32692	32692	dry season, summer	乾季・夏	Init ang ting-init.
32694	32694	cloud	雲	Dag-om ang langit.
32696	32696	haze/fog	もや・霧	Bahala ang kabukiran.
32698	32698	hill	丘	Gagmay nga bungtod.
32700	32700	valley	谷	Nindot ang lung-ag.
32702	32702	land, earth, soil	土地・土	Maayo ang yuta.
32704	32704	sea, ocean	海	Lami ang dagat.
32706	32706	beach, shore	ビーチ・海岸	Nindot ang baybay.
32708	32708	food	食べ物	Lami ang pagkain.
32710	32710	fried rice	チャーハン	Lami ang sinangag.
32712	32712	rice porridge	お粥	Mainit nga lugaw.
32714	32714	roasted whole pig	レチョン・丸焼き豚	Ang lechon paborito.
32716	32716	humba (Bisaya pork stew)	フンバ（豚肉料理）	Lami ang humba.
32718	32718	grilled fish, barbecue	焼き魚・バーベキュー	Lami ang sinugba nga isda.
32720	32720	sinugba and kinilaw combo	焼き魚と酢漬けの組み合わせ	Paborito ang sinuglaw sa Sugbo.
32722	32722	sauteed vegetables	野菜炒め	Lami ang ginisang gulay.
32724	32724	soup, broth	スープ	Mainit nga sabaw.
32726	32726	boiled soup	ゆで料理・スープ	Mainit ang nilaga.
32728	32728	sugar	砂糖	Tam-is kay asukar.
32730	32730	soy sauce	醤油	Lamian ang toyo.
32732	32732	garlic	ニンニク	Ginisa sa bawang.
32734	32734	coconut milk	ココナッツミルク	Lami ang gata.
32736	32736	shrimp paste/fermented fish	バゴオン（発酵エビ・魚）	Maasin ang bagoong.
32738	32738	sugarcane wine	サトウキビ酒	Ang basi gikan sa tubo.
32740	32740	coffee	コーヒー	Mainit nga kape.
32742	32742	water	水	Inom og tubig.
32744	32744	house	家	Dako ang akong balay.
32746	32746	living room	リビング	Naa sila sa sala.
32748	32748	bathroom	お風呂	Naligo siya sa banyo.
32750	32750	window	窓	Sirado ang bintana.
32752	32752	roof	屋根	Nag-ulan sa atop.
32754	32754	table	テーブル	Naa sa ibabaw sa mesa.
32756	32756	sofa, couch	ソファ	Naghigda siya sa sopa.
32758	32758	school	学校	Adto siya sa eskwelahan.
32760	32760	church	教会	Adto kita sa simbahan.
32762	32762	market	市場	Adto sa palengke si nanay.
32764	32764	plaza, town square	広場	Naa sila sa plasa.
32766	32766	hour, time	時間・時刻	Pila na ang oras?
32768	32768	second	秒	Usa ka segundo.
32770	32770	day, sun	日・太陽	Mainit ang adlaw.
32772	32772	morning	朝	Sayo ang buntag.
32774	32774	week	週	Usa ka semana.
32776	32776	Tuesday	火曜日	Martes ang klase.
32778	32778	Thursday	木曜日	Huwebes ang miting.
32780	32780	Saturday	土曜日	Sabado ang pahulayan.
32782	32782	year	年	Usa ka tuig.
32784	32784	decade	10年	Usa ka dekada.
32786	32786	yesterday	昨日	Gahapon ulan.
32788	32788	next, following	次の・来	Sunod semana.
32790	32790	recently	最近	Bag-ohay lang siya miabot.
32792	32792	sometimes	時々	Usahay moulan.
32794	32794	seldom/rarely	めったに	Bihira siya muadto.
32796	32796	two	2・二	Duha kami.
32798	32798	four	4・四	Upat ka adlaw.
32800	32800	six	6・六	Unom ka bulan.
32802	32802	eight	8・八	Walo ka oras.
32804	32804	ten	10・十	Napulo ka piso.
32806	32806	twelve	12・十二	Dose ka buwan.
32808	32808	thousand	千	Usa ka libo.
32810	32810	big, large	大きい	Dako ang balay.
32709	32709	cooked rice	ご飯	Kaon tag kan-on.
32711	32711	bread	パン	Kan-on og tinapay.
32713	32713	noodles	麺	Lami ang pansit.
32715	32715	adobo (meat stew)	アドボ	Lami ang adobo.
32717	32717	roasted chicken	ローストチキン	Lami ang lechon manok.
32719	32719	raw fish in vinegar, ceviche	酢漬け生魚	Lami ang kinilaw.
32721	32721	fried fish, fried food	揚げ魚・揚げ物	Pinirito nga isda.
32723	32723	vegetable soup	野菜スープ	Maluom ang laswa.
32725	32725	sour soup stew	シニガン（酸っぱいスープ）	Maasim ang sinigang.
32727	32727	salt	塩	Dadag og asin.
32729	32729	vinegar	酢	Maasim ang suka.
32731	32731	cooking oil	食用油	Prito sa lana.
32733	32733	egg	卵	Piniritong itlog.
32735	32735	fish sauce	ナンプラー	Tambok ang patis.
32737	32737	coconut wine	ヤシ酒	Tam-is ang tuba.
32739	32739	coconut vodka	ランバノグ（ヤシ焼酎）	Kusog ang lambanog.
32741	32741	tea	お茶	Mainit nga tsa.
32743	32743	milk	牛乳・ミルク	Mainit nga gatas.
32745	32745	room	部屋	Usa ka kwarto.
32747	32747	kitchen	キッチン	Luto siya sa kusina.
32749	32749	door	ドア	Abli ang pultahan.
32751	32751	floor	床	Limpyo ang salog.
32753	32753	bed	ベッド	Maayo ang higdaanan.
32755	32755	chair	椅子	Lingkod sa silya.
32757	32757	wardrobe/cabinet	ワードローブ・棚	Ang sapatos naa sa aparador.
32759	32759	hospital	病院	Naadto siya sa ospital.
32761	32761	store, shop	店	Palita sa tindahan.
32763	32763	park	公園	Naglaro siya sa parke.
32765	32765	road, street, path	道	Limpyo ang dalan.
32767	32767	minute	分	Usa lang ka minuto.
32769	32769	clock, watch	時計	Tan-awa ang relo.
32771	32771	night	夜	Ngitngit ang gabii.
32773	32773	afternoon	午後	Init ang hapon.
32775	32775	Monday	月曜日	Lunes ang iyang adlaw off.
32777	32777	Wednesday	水曜日	Miyerkoles karon.
32779	32779	Friday	金曜日	Biyernes na!
32781	32781	Sunday	日曜日	Domingo ang simbahan.
32783	32783	month, moon	月	Usa ka bulan na.
32785	32785	tomorrow	明日	Ugma ko mobalik.
32787	32787	now, today	今・今日	Karon na!
32789	32789	before, in the past	以前・昔	Kaniadto lahi.
32791	32791	always	いつも	Pirmi siya anhi.
32793	32793	always/continuously	いつも・常に	Kanunay siyang maayo.
32795	32795	one	1・一	Usa ra ko.
32797	32797	three	3・三	Tulo ka buok.
32799	32799	five	5・五	Lima ka piso.
32801	32801	seven	7・七	Pito ka tawo.
32803	32803	nine	9・九	Siyam ka minuto.
32805	32805	eleven	11・十一	Onse na ang oras.
32807	32807	hundred	百	Usa ka gatus.
32809	32809	million	百万	Usa ka milyon.
32811	32811	small, little	小さい	Gamay ang kwarto.
32813	32813	short, low	低い・短い	Mubo ang bata.
32815	32815	narrow	狭い	Pig-ot ang pultahan.
32817	32817	thin	薄い	Nipis ang papel.
32819	32819	light (weight)	軽い	Magaan ang dahon.
32821	32821	blue	青	Asul ang langit.
32823	32823	yellow	黄色	Dalag ang saging.
32825	32825	black	黒	Itom ang iyang buhok.
32827	32827	purple	紫	Lila ang bulak.
32829	32829	brown	茶色	Brown ang kahoy.
32831	32831	gold/golden	金・金色	Bulawan ang singsing.
32833	32833	bitter	苦い	Mapait ang ampalaya.
32835	32835	sour	酸っぱい	Maasim ang suka.
32837	32837	hot, warm	熱い・暑い	Mainit ang sabaw.
32839	32839	fresh, cool	新鮮な・涼しい	Presko ang hangin.
32841	32841	old, aged	古い	Daan ang balay.
32843	32843	old	年老いた	Tigulang na siya.
32845	32845	handsome (male)	ハンサム（男性）	Gwapo si Juan.
32812	32812	tall, high, long	高い・長い	Taas ang kahoy.
32814	32814	wide/broad	広い	Lapad ang dalan.
32816	32816	thick, fat	太い・厚い	Baga ang libro.
32818	32818	heavy	重い	Bug-at ang bag.
32820	32820	red	赤	Pula ang bulak.
32822	32822	green	緑	Berde ang sagbot.
32824	32824	white	白	Puti ang sinina.
32826	32826	orange	オレンジ色	Orange ang mantikilya.
32828	32828	pink	ピンク	Rosas ang iyang sinina.
32830	32830	gray	灰色	Abohon ang bato.
32832	32832	delicious, tasty	美味しい	Lami ang pagkain.
32834	32834	sweet	甘い	Matamis ang mangga.
32836	32836	salty	しょっぱい	Maasin ang bagoong.
32838	32838	cold, cool	冷たい・寒い	Bugnaw ang tubig.
32840	32840	new, fresh	新しい	Bag-o ang sakyanan.
32842	32842	young	若い	Bata pa siya.
32844	32844	beautiful (female)	美しい（女性）	Gwapa kaayo si Maria.
32846	32846	beautiful/elegant	美しい・優雅な	Matahom ang bulak.
32848	32848	bad, evil	悪い	Daotan ang iyang buhat.
32850	32850	easy	簡単な	Sayon ang lesson.
32852	32852	cheap, inexpensive	安い	Barato ang tindahan.
32854	32854	slow, gentle, soft	遅い・優しい	Hinay ang iyang sinulti.
32856	32856	soft	柔らかい	Humok ang higdaanan.
32858	32858	not true, false	嘘・偽り	Dili tinuod ang iyang giingon.
32860	32860	run	走る	Nagdagan ang bata.
32862	32862	sit down	座る	Lingkod dinhi.
32864	32864	go (there)	行く	Adto ko sa tindahan.
32866	32866	enter, go inside	入る	Sulod na kita.
32868	32868	fly, soar	飛ぶ	Nagilupad ang langgam.
32870	32870	give	あげる・渡す	Hatag ko nimo og pagkain.
32872	32872	hold, grip	持つ・握る	Gunita ang akong kamot.
32874	32874	tidy up, keep away	片付ける	Hipos ang imong kwarto.
32876	32876	close/closed	閉める・閉まっている	Sirado ang tindahan.
32878	32878	hear, listen	聞く・聞こえる	Dungog ka nako!
32880	32880	answer/reply	答える・返す	Tubaga ang pangutana.
32882	32882	shout/yell	叫ぶ	Nakasinggit siya.
32884	32884	pray	祈る	Mag-ampo ta.
32886	32886	drink	飲む	Inom og tubig.
32888	32888	fry	揚げる・炒める	Iprito ang isda.
32890	32890	grill/broil	焼く・グリルする	Isugba ang isda.
32892	32892	sell	売る	Nagbaligya siya og prutas.
32894	32894	debt/loan	借金・借り	Dako ang iyang utang.
32896	32896	discount	割引	Naa bay diskwento?
32898	32898	money	お金	Pila ang kwarta?
32900	32900	finish, done	終わる・完了	Human na siya.
32902	32902	continue, proceed	続ける・続く	Padayon ta!
32904	32904	none, not there, absent	ない・いない	Wala na siya.
32906	32906	who	誰	Kinsa ka?
32908	32908	where	どこ	Diin ka nagpuyo?
32910	32910	why	なぜ	Ngano man?
32912	32912	how	どのように	Unsaon man pagbuhat?
32914	32914	what is it	何ですか	Unsa man kana?
32916	32916	and	〜と・そして	Ako ug ikaw.
32918	32918	but	しかし・でも	Gusto ko pero dili ko pwede.
32920	32920	even though, although, even	たとえ〜でも・〜でさえ	Bisan ulan moadto ko.
32922	32922	if, when (conditional)	もし・〜ならば	Kung moulan dili ko adto.
32924	32924	only, just	〜だけ・ただ	Usa ra ka adlaw.
32926	32926	still, yet, more	まだ・もっと	Naa pa siya.
32928	32928	question particle	か（疑問）	Maayo ka ba?
32930	32930	indeed, actually, you know	実はね・〜でしょ	Bitaw nga maayo siya.
32932	32932	sigh, ah, oh	はあ・ため息・あ	Hay nako!
32934	32934	go on, watch out, oh!	さあ・気をつけて	Hala ka na!
32936	32936	damn, devil (expletive)	ちくしょう・悪魔	Yawa kaaayo ka!
32938	32938	very/really	とても・非常に	Maayo kaayo.
32940	32940	few, little, small amount	少ない・ちょっと	Diyutay ra.
32942	32942	very (intensifier)	とても	Dako kaayo.
32944	32944	sure, certain	確かな・確実な	Sigurado ko.
32946	32946	perhaps, I think	たぶん・〜と思う	Tingali ulan ugma.
32948	32948	important	重要な	Importante kaayo.
32950	32950	above, on top	上・上に	Naa sa ibabaw sa mesa.
32952	32952	front/in front	前・前に	Naa sa atubangan.
32954	32954	beside, next to	隣・横に	Tupad sa balay.
32956	32956	far	遠い	Layo ang eskwelahan.
32958	32958	right	右	Tuo nga kamot.
32960	32960	north	北	Amihanan ang hangin.
32962	32962	east	東	Sidlakan ang adlaw mosidlak.
32964	32964	love (verb), to love	愛する	Gihigugma tika.
32966	32966	song	歌	Nindot ang kanta.
32968	32968	music	音楽	Matam-is ang musika.
32970	32970	photo, picture	写真	Nindot ang litrato.
32972	32972	computer	コンピュータ	Naa sa kompyuter.
32974	32974	Sinulog festival (Cebu)	シヌログ祭り	Mag-Sinulog ta.
32976	32976	Christmas	クリスマス	Malipayon nga Pasko!
32978	32978	true, real, genuine	本当の・真実	Tinuod gyud kana.
32980	32980	community cooperation/spirit	バヤニハン（共同作業精神）	Ang bayanihan usa ka tradisyon.
32982	32982	thought, think, mind	考え・心	Hunahunaa ang imong buhat.
32984	32984	doubt/hesitate	疑う・迷う	Nagduhaduha siya.
32986	32986	hope, wish	希望	May pag-asa pa.
32988	32988	fever	熱	Naa siyay hilanat.
32990	32990	cold, flu, runny nose	風邪・鼻水	Naa siyay sip-on.
32992	32992	healthy	健康な	Himsog siya.
32994	32994	doctor	医者	Doktor si Juan.
32996	32996	teacher (male)	先生（男性）	Maayo ang maestro.
32998	32998	lawyer	弁護士	Abogado ang iyang tatay.
33000	33000	book	本	Dako ang libro.
33002	33002	paper	紙	Hatag og papel.
33004	33004	class	クラス	Pila ka klase?
32847	32847	good, fine, well	良い・元気	Maayo ang maestro.
32849	32849	difficult, hard	難しい	Lisod ang exam.
32851	32851	expensive, precious, dear	高い・大切な	Mahal ang pagkain.
32853	32853	fast	速い	Paspas ang kabayo.
32855	32855	strong, loud	強い・大きな音	Kusog ang iyang tingog.
32857	32857	hard, firm	硬い	Gahi ang bukog.
32859	32859	walk, go	歩く・行く	Molakaw ko sa eskwelahan.
32861	32861	stand up	立つ	Tindug ka!
32863	32863	return, come back	戻る	Mobalik ko ugma.
32865	32865	run away/leave	逃げる・去る	Milayas ang iro.
32867	32867	exit, go outside	出る・外に出る	Gawas ta!
32869	32869	get, take, grab	取る・もらう	Kuha og tubig.
32871	32871	cut, chop	切る	Putla ang kahoy.
32873	32873	throw	投げる	Labay sa bola.
32875	32875	open	開ける	Bukas ang pultahan.
32877	32877	speak, say, talk	話す・言う	Nagsulti siya og Bisaya.
32879	32879	ask, question	聞く・質問する	Pangutana siya.
32881	32881	call (out), name	呼ぶ・名前をつける	Tawga siya.
32883	32883	tell a story, chat	話す・おしゃべり	Mag-istorya ta.
32885	32885	eat	食べる	Kaon na kita.
32887	32887	cook	料理する	Nagluto ang nanay.
32889	32889	boil	ゆでる・煮る	Ilagang ang manok.
32891	32891	buy, purchase	買う	Palita og tinapay.
32893	32893	pay, payment	払う・支払い	Bayari ang imong utang.
32895	32895	price	値段	Pila ang presyo?
32897	32897	work, job	働く・仕事	Magtrabaho ko ugma.
32899	32899	start, begin	始める・始まる	Sugod na kita.
32901	32901	stop	止まる・止める	Hunong na!
32903	32903	there is, present, existing	ある・いる	Naa bay tubig?
32905	32905	there is (formal), have	ある・持っている	Aduna bay imong pera?
32907	32907	what	何	Unsa man kana?
32909	32909	when	いつ	Kanus-a ka moabot?
32911	32911	how many, how much	いくら・いくつ	Pila man kana?
32913	32913	which, which one	どれ・どちら	Hain ang imong balay?
32915	32915	who (subject)	誰が	Kinsay nabuhat niini?
32917	32917	or	〜か・または	Mangga o saging?
32919	32919	because, for	なぜなら・〜ので	Maayo siya kay buotan.
32921	32921	for, in order to, so that	〜のために・〜ために	Para nimo ni.
32923	32923	while, as long as	〜の間・〜している間	Samtang nagluto siya naminaw.
32925	32925	already, now (change of state)	もう・すでに	Human na.
32927	32927	emphasis/softening particle	〜ですよ・〜ね（強調・緩和）	Maayo man siya.
32929	32929	really, definitely, indeed	本当に・絶対に	Gusto ko gyud.
32931	32931	so, therefore, even	だから・〜すら	Maayo gani siya.
32933	32933	gosh, oh my (from Jesus)	まあ・えっ	Sus! Dako kaayo!
32935	32935	wow, oh (surprise)	ワオ・あら（驚き）	Abay! Gwapa kaayo!
32937	32937	nice, beautiful, wonderful	素敵・いい・美しい	Nindot kaayo!
32939	32939	many, a lot, much	たくさん・多い	Daghan og tawo.
32941	32941	all, everything	全て・みんな	Tanan mokaon.
32943	32943	true, real	本当の・真実	Tinuod ba?
32945	32945	maybe, perhaps	たぶん・かもしれない	Siguro moabot siya.
32947	32947	clear, obvious	明確な・明らか	Klaro ba?
32949	32949	special	特別な	Espesyal nga adlaw.
32951	32951	below, under, beneath	下・下に	Ilawom sa balay.
32953	32953	back, behind	後ろ・後ろに	Naa sa luyo.
32955	32955	center, middle, between	中間・真ん中	Naa sa taliwala.
32957	32957	near, close	近い	Duol na ta.
32959	32959	left	左	Wala nga dalan.
32961	32961	south	南	Habagatan ang isla.
32963	32963	west	西	Kasadpan ang adlaw mosalop.
32965	32965	love (noun), affection	愛・愛情	Ang pagmahal sa pamilya.
32967	32967	dance	ダンス・踊り	Nindot ang sayaw.
32969	32969	serenade	ハラナ（セレナーデ）	Nagharana siya.
32971	32971	telephone	電話	Tawaga sa telepono.
32973	32973	internet	インターネット	Naa sa internet.
32975	32975	festival	フィエスタ・祭り	Maayong fiesta!
32977	32977	Easter	イースター	Ang Pascua usa ka selebrasyon.
32979	32979	lie, false	嘘・偽り	Bakak ang iyang giingon.
32981	32981	gratitude, thanksgiving	感謝	Dakong pasalamat.
32983	32983	believe, trust	信じる	Nagtuo ko nimo.
32985	32985	dream	夢	Nindot ang akong damgo.
32987	32987	sickness, pain, illness	病気・痛み	Sakit ang akong ulo.
32989	32989	cough	咳	Nagatubo siya.
32991	32991	wound, injury	傷	Naa siyay samad.
32993	32993	medicine	薬	Inom og tambal.
32995	32995	nurse	看護師	Nars si Maria.
32997	32997	teacher (female)	先生（女性）	Maayo ang maestra.
32999	32999	student	学生・生徒	Estudyante pa siya.
33001	33001	pencil	鉛筆	Naa bay lapis?
33003	33003	ballpen	ボールペン	Sulat sa bolpen.
33005	33005	clothes, dress	服・ドレス	Nindot ang sinina.
33007	33007	pants	ズボン	Bag-o ang karsones.
33009	33009	slippers	サンダル	Ang tsinelas barato.
33011	33011	vehicle	乗り物	Naa bay sakyanan?
33013	33013	motorcycle	バイク・オートバイ	Paspas ang motor.
33015	33015	bus	バス	Ang bus puno.
33017	33017	bicycle	自転車	Nindot magtrabaho og bisikleta.
33019	33019	ship, boat	船	Dako ang barko.
33021	33021	airplane	飛行機	Lumapad ang eroplano.
33023	33023	church	教会	Adto kita sa simbahan.
33025	33025	priest	神父	Ang pari nagmisa.
33027	33027	prayer	祈り・お祈り	Mag-ampo ta.
33006	33006	shirt, t-shirt	シャツ・Tシャツ	Puti ang kamiseta.
33008	33008	shoes	靴	Bag-o ang sapatos.
33010	33010	socks	靴下	Puting medyas.
33012	33012	car	車	Bag-o ang kotse.
33014	33014	jeepney	ジープニー	Sakay sa dyipni.
33016	33016	tricycle	トライシクル	Ang trisiklo barato.
33018	33018	taxi	タクシー	Mosakay og taksi.
33020	33020	small boat, outrigger	小舟・アウトリガーボート	Ang bangka gamay.
33022	33022	airport	空港	Adto sa tugpahanan.
33024	33024	God	神	Salamat sa Dios.
33026	33026	mass (church)	ミサ	Naa kita sa misa.
\.


--
-- Name: meanings_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.meanings_id_seq', 33027, true);


--
-- Name: words_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.words_id_seq', 33027, true);


--
-- PostgreSQL database dump complete
--

\unrestrict hFXbh1FJ98YgiuGQPP6znUMErcNSoAqg4jIgu0z1YF6j2L5XqAyZEeeNU2xkLFL

