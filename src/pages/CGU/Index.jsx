import React from 'react'
import style from './cgu.module.css'
import Header from '@components/Header/Index'
import Footer from '@components/Footer/Index'
import { NavLink } from 'react-router-dom'
import { FaLongArrowAltLeft } from 'react-icons/fa'

const CGU = () => {
    return (
        <>
            <Header count={ '...' } viewers={ '...' } />
            <div className={style.tvstream__cgu}>

                <NavLink className={style.tvstream__back_button} to="/"><FaLongArrowAltLeft /> Retour au site</NavLink>

                <h2>Conditions Générales d'Utilisation pour TV stream - GTA RP</h2>

                <p>En vigueur au 08/01/2024</p>

                <p>Les présentes conditions générales d'utilisation (dites « CGU ») ont pour objet l'encadrement juridique
                    des modalités de mise à disposition du site et des services par https://dadureelisa-serveurrp.netlify.app/ et de définir les
                    conditions d’accès et d’utilisation des services par « l'Utilisateur ». <br />
                    Les présentes CGU sont accessibles sur le site à la rubrique «CGU».
                </p>

                <h3>ARTICLE 1 : LES MENTIONS LÉGALES</h3>

                <p>L’édition et la direction de la publication du site https://dadureelisa-serveurrp.netlify.app/ est assurée
                    par Elis0u tout en utilisant l'api Twitch.
                    L'hébergeur du site https://dadureelisa-serveurrp.netlify.app/ est la société Netlify.
                </p>

                <h3>ARTICLE 2 : ACCÈS AU SITE</h3>

                <p>Le site https://dadureelisa-serveurrp.netlify.app/ permet à l'Utilisateur un accès gratuit aux services
                    suivants :
                    Le site internet propose les services suivants :
                    - liste des streamers sur ServerRp en stream,
                    - redirection vers le site https://www.twitch.tv lorsqu'un click est effectué sur un streamer.
                    Le site est accessible gratuitement en tout lieu à tout Utilisateur ayant un accès à Internet. Tous les
                    frais supportés par l'Utilisateur pour accéder au service (matériel informatique, logiciels, connexion
                    Internet, etc.) sont à sa charge</p>

                <h3>ARTICLE 3 : COLLECTE DES DONNÉES</h3>

                <p>Le site assure à l'Utilisateur une collecte et un traitement d'informations personnelles dans le respect
                    de la vie privée conformément à la loi n°78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers
                    et aux libertés.</p>
                <p>En vertu de la loi Informatique et Libertés, en date du 6 janvier 1978, l'Utilisateur dispose d'un droit
                    d'accès, de rectification, de suppression et d'opposition de ses données personnelles.</p>

                <h3>ARTICLE 4 : PROPRIÉTÉ INTELLECTUELLE</h3>

                <p>Les marques, logos, signes ainsi que tous les contenus du site (textes, images, son…) font l'objet
                    d'une protection par le Code de la propriété intellectuelle et plus particulièrement par le droit d'auteur.</p>
                <p>L'Utilisateur doit solliciter l'autorisation préalable du site pour toute reproduction, publication, copie
                    des différents contenus. Il s'engage à une utilisation des contenus du site dans un cadre strictement
                    privé, toute utilisation à des fins commerciales et publicitaires est strictement interdite.</p>
                <p>Toute représentation totale ou partielle de ce site par quelque procédé que ce soit, sans l’autorisation
                    expresse de l’exploitant du site Internet constituerait une contrefaçon sanctionnée par l’article L 335-2
                    et suivants du Code de la propriété intellectuelle.</p>
                <p>Il est rappelé conformément à l’article L122-5 du Code de propriété intellectuelle que l’Utilisateur qui
                    reproduit, copie ou publie le contenu protégé doit citer l’auteur et sa source.</p>

                <h3>ARTICLE 5 : RESPONSABILITÉ</h3>

                <p>Les sources des informations diffusées sur le site https://dadureelisa-serveurrp.netlify.app/ sont
                    réputées fiables mais le site ne garantit pas qu’il soit exempt de défauts, d’erreurs ou d’omissions.</p>

                <p>Les informations communiquées sont présentées à titre indicatif et général sans valeur contractuelle.
                    Malgré des mises à jour régulières, le site https://dadureelisa-serveurrp.netlify.app/ ne peut être tenu
                    responsable de la modification des dispositions administratives et juridiques survenant après la
                    publication. De même, le site ne peut être tenue responsable de l’utilisation et de l’interprétation de
                    l’information contenue dans ce site. <br />
                    Le site https://dadureelisa-serveurrp.netlify.app/ ne peut être tenu pour responsable d’éventuels virus
                    qui pourraient infecter l’ordinateur ou tout matériel informatique de l’Internaute, suite à une utilisation,
                    à l’accès, ou au téléchargement provenant de ce site.
                </p>

                <p>La responsabilité du site ne peut être engagée en cas de force majeure ou du fait imprévisible et
                    insurmontable d'un tiers.
                </p>

                <h3>ARTICLE 6 : LIENS HYPERTEXTES</h3>

                <p>Des liens hypertextes peuvent être présents sur le site. L’Utilisateur est informé qu’en cliquant sur ces
                    liens, il sortira du site https://dadureelisa-serveurrp.netlify.app/. Ce dernier n’a pas de contrôle sur les
                    pages web sur lesquelles aboutissent ces liens et ne saurait, en aucun cas, être responsable de leur
                    contenu.</p>

                <h3>ARTICLE 7 : COOKIES</h3>

                <p>L’Utilisateur est informé que lors de ses visites sur le site, un cookie peut s’installer automatiquement
                    sur son logiciel de navigation.</p>

                <p>
                    Les cookies sont de petits fichiers stockés temporairement sur le disque dur de l’ordinateur de
                    l’Utilisateur par votre navigateur et qui sont nécessaires à l’utilisation du site https://dadureelisaserveurrp.netlify.app/. Les cookies ne contiennent pas d’information personnelle et ne peuvent pas
                    être utilisés pour identifier quelqu’un. Un cookie contient un identifiant unique, généré aléatoirement et
                    donc anonyme. Certains cookies expirent à la fin de la visite de l’Utilisateur, d’autres restent.

                </p>

                <p>
                    L’information contenue dans les cookies est utilisée pour améliorer le site https://dadureelisaserveurrp.netlify.app/.
                </p>

                <p>
                    En naviguant sur le site, L’Utilisateur les accepte.
                    L’Utilisateur pourra désactiver ces cookies par l’intermédiaire des paramètres figurant au sein de son
                    logiciel de navigation
                </p>

                <h3>ARTICLE 8 : DROIT APPLICABLE ET JURIDICTION COMPÉTENTE</h3>

                <p>La législation française s'applique au présent contrat. En cas d'absence de résolution amiable d'un
                    litige né entre les parties, les tribunaux français seront seuls compétents pour en connaître.
                    Pour toute question relative à l’application des présentes CGU, vous pouvez joindre l’éditeur aux
                    coordonnées inscrites à l’ARTICLE 1</p>

            </div>
            <Footer />
        </>
    )
}

export default CGU
