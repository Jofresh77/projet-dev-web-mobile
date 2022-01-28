import { Component, OnInit } from '@angular/core';
import {LieuxInterface} from "../../shared/lieux.interface";

@Component({
  selector: 'app-lieux-alsace',
  templateUrl: './lieux.component.html',
  styleUrls: ['./lieux.component.css']
})
export class LieuxComponentAlsace implements OnInit {

  listLieux: LieuxInterface[] = [
    {
      title: "La Petite France",
      subTitle: "Strasbourg",
      img: "../../../assets/img/alsace/petite-france.jpg",
      desc:"Au cœur du Strasbourg classé Patrimoine Mondial de l’Unesco, découvrez le quartier de La Petite France. C’est le quartier le plus pittoresque du vieux Strasbourg. Les pêcheurs, les meuniers et les tanneurs vivaient et travaillaient autrefois dans ce quartier bâti à fleur d’eau. Les magnifiques maisons à colombage datent des XVIe et XVIIe siècles. Leurs toits pentus sont ouverts sur des greniers où séchaient autrefois les peaux. Totalement détruit durant la Seconde Guerre mondiale, Strasbourg a engagé après-guerre une politique de reconstruction de ce quartier pittoresque."
    },
    {
      title: "Maison Pfister",
      subTitle: "Colmar",
      img: "../../../assets/img/alsace/pfister.jpg",
      desc: "La maison Pfister fut construite en 1537 pour le compte du chapelier Ludwig Scherer qui avait fait fortune avec le commerce d’argent dans le Val de Liepvre. Malgré ses caractéristiques médiévales, elle est le premier exemple de la Renaissance architecturale à Colmar. Avec son oriel d’angle à deux étages, sa galerie en bois, sa tourelle octogonale et ses peintures murales qui représentent des scènes bibliques et profanes, la maison Pfister est devenue un des symboles du vieux Colmar. Elle doit son nom à la famille qui la restaura et l’occupa de 1841 à 1892.\n" +
        "\n" +
        "La façade et la toiture de cet édifice ont été restaurées en 2012"
    },
    {
      title: "Barrage Vauban",
      subTitle: "Strasbourg",
      img: "../../../assets/img/alsace/vauban.jpg",
      desc: "A quelques mètres des Ponts Couverts, le Barrage Vauban ou Grande Ecluse -puisqu’elle permettait d’inonder en cas de besoin tout le front sud de la ville- fut construit aux alentours de 1690 par Tarade d’après les plans de l’ingénieur militaire Vauban. Au sommet du bâtiment a été aménagé une agréable terrasse panoramique, d’où l’on embrasse d’un seul coup d’œil le tracé de la ville et celui de ses canaux."
    },
    {
      title: "Château Saint-Ulrich",
      subTitle: "Ribeauvillé",
      img: "../../../assets/img/alsace/ulrich.jpg",
      desc: "Le château Saint-Ulrich (alt. 530 m) est le plus imposant et le mieux conservé des trois châteaux de Ribeauvillé.\n" +
        "Appelé aussi Rappolstein, Gross Rappolstein, ou encore Ukrichsburg, il fut bâti vers le milieu du XIIIe siècle sur un éperon rocheux surplombant la vallée du Strengbach et reçu des agrandissements successifs, dont le plus remarquable consista dans l'adjonction d'une aile de proportions grandioses, composée de deux immenses salles disposées l'une sur l'autre et éclairées du côté du Levant par une double rangée de 7 fenêtres géminées de plein cintre.\n" +
        "Si le St-Ulrich n’a que peu de caractère militaire, c’est un bel exemple d’habitat seigneurial. Résidence des Ribeaupierre jusqu'au XVe siècle, il est l'une des plus belles réalisations de l'art profane en Alsace.\n" +
        "Au XVIe siècle, le château tombe en ruine par abandon, bien qu’il ait encore une petite garnison au début de la guerre de Trente ans (1618-1648). Au XVIIe siècle, le château est incendié."
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
