import React, { Component } from 'react';
import HeroImage from './HeroImage';
import Search from './Search';
import Icon from '../icons/Icon';

import './EntryPage.css';

class EntryPage extends Component {
	render() {
		return (
			<div className="EntryPage">
				<HeroImage />
				<div className="wrapper white">
					<br /><br />
					<section className="container">
						<div className="row">
							<div className="column"><Search /></div>
							<div className="column column-offset-10">
								<h3>Znajdź Koło Gospodyń</h3>
								<p>Znajdź Koło Gospodyń działające w twojej okolicy. Przeglądaj treści lub <b>dołącz</b>. Dziel się wiedzą, ucz się i baw. Uczestnicz w spotkaniach i wydarzeniach organizowanych przez koło. Wspieraj kulturę i gospodarkę.</p>
							</div>
						</div>
					</section>
					<br />
				</div>
				<div className="wrapper grey">
					<br />
					<br />
					<section className="container">
						<h3 className="center"><b>Zarejestruj Koło</b></h3>
						<div className="row advantages">
							<div className="column">
								<Icon>language</Icon>
								<h4><b>Promocja działalności</b></h4>
								<p>
									W serwisie wypromujecie działalność. Publikując <b>artykuły</b>, <b>przepisy kulinarne</b>, <b>zdjęcia</b> i <b>filmy</b> zwiększycie popularaność koła. Publikacja własnych przepisów sprawi, że wasz profil będzie zyskiwać dodatkowe odsłony. Tak, promując kulturę regionu, zbudujecie reputację koła.
								</p>
							</div>
							<div className="column">
								<Icon>record_voice_over</Icon>
								<h4><b>Nowi ludzie, większy zasięg</b></h4>
								<p>
									Z serwisem przyciągniecie nowych członków, jednocześnie upraszczając komunikację ze światem. Od teraz dużo łatwiej będzie się z Wami skontaktować. Ułatwione będzie otrzymanie dotacji i dołączanie nowych osób do społeczności koła. Błyskawicznie dowiecie się o <b>okazjach</b>, <b>wydarzeniach</b> i <b>kiermaszach</b>.
								</p>
							</div>
						</div>
						<div className="row advantages">
							<div className="column">
								<Icon>event</Icon>
								<h4><b>Zarządzanie społecznością</b></h4>
								<p>
									Wystarczy, że dodacie wydarzenie do kalendarza spotkań, a informacja natychmiast dotrze do wszystkich gospodyń. Teraz będziecie <b>błyskawicznie porozumiewać się</b> ze wszystkimi członkiniami. Ze społeczności wybierzecie redaktorów, którzy pomogą pisać artykuły, dodawać zdjęcia i filmy z działalności koła.
								</p>
							</div>
							<div className="column">
								<Icon>redeem</Icon>
								<h4><b>Zbiórki i fundusze</b></h4>
								<p>
									Rejestrując koło zyskujecie możliwość zbiórki datków na rzecz wsparcia działalności koła. Każdy odwiedzający może wesprzeć Was, przesyłając dowolną kwotę na podane konto PayPal. Rejestracja koła w serwisie ułatwi <b>promocję i sprzedaż</b> produktów wytwarzanych przez członkinie.
								</p>
							</div>
						</div>
					</section>
					<br />
					<br />
				</div>
				
			</div>
		);
	}
}

export default EntryPage;