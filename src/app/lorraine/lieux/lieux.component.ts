import { Component, OnInit } from '@angular/core';
import {LieuxInterface} from "../../shared/lieux.interface";

@Component({
  selector: 'app-lieux-lorraine',
  templateUrl: './lieux.component.html',
  styleUrls: ['./lieux.component.css']
})
export class LieuxComponentLorraine implements OnInit {

  listLieux: LieuxInterface[] = [
    {
      title: "Fort de Douaumont",
      subTitle: "Verdun",
      img: "../../../assets/img/lorraine/douaumont.jpg",
      desc: "Le fort de Douaumont est le plus puissant ouvrage de la place-forte de Verdun.\n" +
        "\n" +
        "Enlevé par surprise 4 jours après le début de la bataille de Verdun, il sera occupé pendant huit mois par l'armée allemande, qui en fera un abri pour ses troupes et un point d'appui essentiel pour poursuivre son offensive. Malgré plusieurs tentatives de reconquête, ce n'est que le 24 octobre 1916 que le fort sera repris.\n" +
        "\n" +
        "Films et photographies d’époque, documents d’archives, commentaires et témoignages permettent aux visiteurs munis du guide multimédia de mieux comprendre l’histoire de ce haut lieu.\n" +
        "\n" +
        "A découvrir : une chambrée, la tourelle 155, la nécropole allemande où reposent plus de 600 soldats allemands.",
    },
    {
      title: "Parc Archéologique",
      subTitle: "Bliesbruck",
      img: "../../../assets/img/lorraine/archeologique.jpg",
      desc: "Le Parc archéologique européen de Bliesbruck-Reinheim, se situe dans la vallée de la Blies, des deux côtés de la frontière franco-allemande. Son cadre naturel s'intègre dans la réserve de bioshère du Bliesgau, reconnue par l’UNESCO, pour sa biodiversité exceptionnelle et la préservation des paysages traditionnels.\n" +
        "\n" +
        "Plongez dans le passé en découvrant la reconstitution de la tombe de la Princesse de Reinheim, une des sépultures celtiques les plus riches d'Europe. Visitez la petite ville antique de Bliesbruck, ses thermes et quartiers artisanaux et à proximité, une immense villa, à la fois lieu de production agricole et résidence d'un riche propriétaire. Découvrez, dans les espaces d'exposition, les objets mis au jour par les archéologues.\n" +
        "\n" +
        "Le Parc est muni de dispositifs de réalité virtuelle qui viendront approfondir votre visite. A l’aide de votre smartphone ou d’une tablette numérique prêtée, vous suivrez Lucius Toccius Flavinus, un authentique Gallo-Romain, pour une immersion dans la vie des habitants de l'Antiquité. Une paire de lunettes 3D vous fera profiter de la richesse des restitutions des bâtiments romains au temps de leur splendeur.",
    },
    {
      title: "Citadelle de Bitche",
      subTitle: "Bitche",
      img: "../../../assets/img/lorraine/bitche.jpg",
      desc: "Au détour des collines des Vosges du Nord, au sommet d'une barre rocheuse qui surplombe la ville, la Citadelle de Bitche déploie ses puissantes murailles flanquées de bastions.\n" +
        "\n" +
        "Entre 1680 et 1754, Vauban et Cormontaigne ont successivement œuvré à son édification pour le compte des rois de France. On lui devine toutes les caractéristiques de l’architecture militaire des 17e et 18e siècles. Cette forteresse n’en demeure pas moins un ouvrage unique et une prouesse d’ingéniosité.\n" +
        "\n" +
        "Une restitution cinématographique grandeur nature, installée dans les souterrains et composée de scènes extraites du film « La Forteresse assiégée » du réalisateur Gérard Mordillat, replonge le visiteur au cœur des événements du siège historique de 1870-1871.\n" +
        "\n" +
        "Le musée « Des Hommes dans la Guerre de 1870 » propose une vision réaliste de ce conflit au travers d’images d’archives et de récits de soldats.",
    },
    {
      title: "Les hautes Mynes",
      subTitle: "Le Thillot",
      img: "../../../assets/img/lorraine/myne.jpg",
      desc: "Découvrez l'aventure des mineurs de cuivre des Ducs de Lorraine et marchez sur leurs traces à travers les galeries, les puits et les haldes des 16e et 17e siècles.\n" +
        "\n" +
        "Deux parcours sont possibles : l'un est tout public et l'autre, un peu plus sportif, donne accès au cœur du réseau souterrain, à la mine de la \"Rouge-Montagne\".\n" +
        "\n" +
        "L'exposition de la Maison des Hautes-Mynes complète la visite de la mine.",
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
