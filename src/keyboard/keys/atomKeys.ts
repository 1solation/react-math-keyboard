import { KeyProps } from "./key";
import { KeyId } from "./keyIds";

const atoms: { formula: string; name: KeyId }[] = [
  { formula: "H", name: "Hydrogène" },
  { formula: "He", name: "Hélium" },
  { formula: "Li", name: "Lithium" },
  { formula: "Be", name: "Béryllium" },
  { formula: "B", name: "Bore" },
  { formula: "C", name: "Carbone" },
  { formula: "N", name: "Azote" },
  { formula: "O", name: "Oxygène" },
  { formula: "F", name: "Fluor" },
  { formula: "Ne", name: "Néon" },
  { formula: "Na", name: "Sodium" },
  { formula: "Mg", name: "Magnésium" },
  { formula: "Al", name: "Aluminium" },
  { formula: "Si", name: "Silicium" },
  { formula: "P", name: "Phosphore" },
  { formula: "S", name: "Soufre" },
  { formula: "Cl", name: "Chlore" },
  { formula: "Ar", name: "Argon" },
  { formula: "K", name: "Potassium" },
  { formula: "Ca", name: "Calcium" },
  { formula: "Sc", name: "Scandium" },
  { formula: "Ti", name: "Titane" },
  { formula: "V", name: "Vanadium" },
  { formula: "Cr", name: "Chrome" },
  { formula: "Mn", name: "Manganèse" },
  { formula: "Fe", name: "Fer" },
  { formula: "Co", name: "Cobalt" },
  { formula: "Ni", name: "Nickel" },
  { formula: "Cu", name: "Cuivre" },
  { formula: "Zn", name: "Zinc" },
  { formula: "Ga", name: "Gallium" },
  { formula: "Ge", name: "Germanium" },
  { formula: "As", name: "Arsenic" },
  { formula: "Se", name: "Sélénium" },
  { formula: "Br", name: "Brome" },
  { formula: "Kr", name: "Krypton" },
  { formula: "Rb", name: "Rubidium" },
  { formula: "Sr", name: "Strontium" },
  { formula: "Y", name: "Yttrium" },
  { formula: "Zr", name: "Zirconium" },
  { formula: "Nb", name: "Niobium" },
  { formula: "Mo", name: "Molybdène" },
  { formula: "Tc", name: "Technétium" },
  { formula: "Ru", name: "Ruthénium" },
  { formula: "Rh", name: "Rhodium" },
  { formula: "Pd", name: "Palladium" },
  { formula: "Ag", name: "Argent" },
  { formula: "Cd", name: "Cadmium" },
  { formula: "In", name: "Indium" },
  { formula: "Sn", name: "Étain" },
  { formula: "Sb", name: "Antimoine" },
  { formula: "Te", name: "Tellure" },
  { formula: "I", name: "Iode" },
  { formula: "Xe", name: "Xénon" },
  { formula: "Cs", name: "Césium" },
  { formula: "Ba", name: "Baryum" },
  { formula: "La", name: "Lanthane" },
  { formula: "Ce", name: "Cérium" },
  { formula: "Pr", name: "Praséodyme" },
  { formula: "Nd", name: "Néodyme" },
  { formula: "Pm", name: "Prométhium" },
  { formula: "Sm", name: "Samarium" },
  { formula: "Eu", name: "Europium" },
  { formula: "Gd", name: "Gadolinium" },
  { formula: "Tb", name: "Térbium" },
  { formula: "Dy", name: "Dysprosium" },
  { formula: "Ho", name: "Holmium" },
  { formula: "Er", name: "Erbium" },
  { formula: "Tm", name: "Thulium" },
  { formula: "Yb", name: "Ytterbium" },
  { formula: "Lu", name: "Lutétium" },
  { formula: "Hf", name: "Hafnium" },
  { formula: "Ta", name: "Tantale" },
  { formula: "W", name: "Tungstène" },
  { formula: "Re", name: "Rhénium" },
  { formula: "Os", name: "Osmium" },
  { formula: "Ir", name: "Iridium" },
  { formula: "Pt", name: "Platine" },
  { formula: "Au", name: "Or" },
  { formula: "Hg", name: "Mercure" },
  { formula: "Tl", name: "Thallium" },
  { formula: "Pb", name: "Plomb" },
  { formula: "Bi", name: "Bismuth" },
  { formula: "Po", name: "Polonium" },
  { formula: "At", name: "Astate" },
  { formula: "Rn", name: "Radon" },
  { formula: "Fr", name: "Francium" },
  { formula: "Ra", name: "Radium" },
  { formula: "Ac", name: "Actinium" },
  { formula: "Th", name: "Thorium" },
  { formula: "Pa", name: "Protactinium" },
  { formula: "U", name: "Uranium" },
  { formula: "Np", name: "Neptunium" },
  { formula: "Pu", name: "Plutonium" },
  { formula: "Am", name: "Américium" },
  { formula: "Cm", name: "Curium" },
  { formula: "Bk", name: "Berkélium" },
  { formula: "Cf", name: "Californium" },
  { formula: "Es", name: "Einsteinium" },
  { formula: "Fm", name: "Fermium" },
  { formula: "Md", name: "Mendélévium" },
  { formula: "No", name: "Nobelium" },
  { formula: "Lr", name: "Lawrencium" },
  { formula: "Rf", name: "Rutherfordium" },
  { formula: "Db", name: "Dubnium" },
  { formula: "Sg", name: "Seaborgium" },
  { formula: "Bh", name: "Bohrium" },
  { formula: "Hs", name: "Hassium" },
  { formula: "Mt", name: "Meitnérium" },
  { formula: "Ds", name: "Darmstadtium" },
  { formula: "Rg", name: "Roentgenium" },
  { formula: "Cn", name: "Copernicium" },
  { formula: "Nh", name: "Nihonium" },
  { formula: "Fl", name: "Flerovium" },
  { formula: "Mc", name: "Moscovium" },
  { formula: "Lv", name: "Livermorium" },
  { formula: "Ts", name: "Tennessine" },
  { formula: "Og", name: "Oganesson" },
];

export const atomKeysProps = atoms.map((atomData): KeyProps => {
  return {
    id: atomData.name as KeyId,
    label: atomData.formula,
    labelType: "raw",
    mathfieldInstructions: {
      content: `\\text{${atomData.formula}}`,
      method: "write",
    },
    group: "atoms",
  };
});
