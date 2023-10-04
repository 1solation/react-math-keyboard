import { textifyInLatex } from "../../utils/textifyInLatex";
import { KeyProps } from "./key";
import { KeyId } from "./keyIds";

const moleculesData = [
  { name: "Dihydrogène", formula: "H_2" },
  { name: "Dioxygène", formula: "O_2" },
  { name: "Eau", formula: "H_2O" },
  { name: "Méthane", formula: "CH_4" },
  { name: "Dioxyde de carbone", formula: "CO_2" },
  { name: "Ammoniac", formula: "NH_3" },
  { name: "Dioxyde de soufre", formula: "SO_2" },
  { name: "Éthanol", formula: "C_2H_5OH" },
  { name: "Glucose", formula: "C_6H_{12},O_6" },
  { name: "Méthanol", formula: "CH_3OH" },
  { name: "Propane", formula: "C_3H_8" },
  { name: "Butane", formula: "C_4H_{10}," },
  { name: "Acide sulfurique", formula: "H_2SO_4" },
  { name: "Propylène", formula: "C_3H_6" },
  { name: "Benzène", formula: "C_6H_6" },
  { name: "Acetonitrile", formula: "CH_3CN" },
  { name: "Méthanal", formula: "CH_2O" },
  { name: "Méthanoate de sodium", formula: "HCOONa" },
  { name: "Carbonate de calcium", formula: "CaCO_3" },
  { name: "Sulfate d'ammonium", formula: "(NH_4)_2SO_4" },
  { name: "Soude caustique", formula: "NaOH" },
  { name: "Nitrate d'ammonium", formula: "NH_4NO_3" },
  { name: "Carbonate de sodium", formula: "Na_2CO_3" },
  { name: "Vitamine C", formula: "C_6H_8O_6" },
  { name: "Aspirine", formula: "C_9H_8O_4" },
  { name: "Caféine", formula: "C_8H_{10},N_4O_2" },
  { name: "Paracétamol", formula: "C_8H_9NO_2" },
  { name: "Chlorure de sodium", formula: "NaCl" },
  { name: "Lactose", formula: "C_{12},H_{22},O_{11}," },
  { name: "Acide acétique", formula: "CH_3COOH" },
  { name: "Magnésium", formula: "Mg" },
  { name: "Oxyde de magnésium", formula: "MgO" },
  { name: "Fer", formula: "Fe" },
  { name: "Oxyde de fer(III)", formula: "Fe_2O_3" },
  { name: "Éthane", formula: "C_2H_6" },
  { name: "Éthylène", formula: "C_2H_4" },
  { name: "Acétone", formula: "C_3H_6O" },
  { name: "Toluène", formula: "C_7H_8" },
  { name: "Éthylène glycol", formula: "C_2H_6O_2" },
  { name: "Butène", formula: "C_4H_8" },
  { name: "Pentène", formula: "C_5H_{10}," },
  { name: "Cyclohexane", formula: "C_6H_{12}," },
  { name: "Acétate d'éthyle", formula: "C_4H_8O_2" },
  { name: "Acétate de méthyle", formula: "C_3H_6O_2" },
  { name: "Acétate de butyle", formula: "C_6H_{12},O_2" },
  { name: "Phénol", formula: "C_6H_6O" },
  { name: "Éthanal", formula: "C_2H_4O" },
  { name: "Butyraldéhyde", formula: "C_4H_8O" },
  { name: "Furfural", formula: "C_5H_4O_2" },
  { name: "Acide formique", formula: "CH_2O_2" },
  { name: "Sucrose", formula: "C_{12},H_{22},O_{11}," },
  { name: "Acide chlorhydrique", formula: "HCl" },
  { name: "Hydroxyde de sodium", formula: "NaOH" },
  { name: "Nitrate d'argent", formula: "AgNO_3" },
  { name: "Chlorure d'argent", formula: "AgCl" },
  { name: "Nitrate de sodium", formula: "NaNO_3" },
  { name: "Hydroxyde de calcium", formula: "Ca(OH)_2" },
  { name: "Sulfate de calcium", formula: "CaSO_4" },
  { name: "Sulfate de cuivre", formula: "CuSO_4" },
  { name: "Hydroxyde de cuivre(II)", formula: "Cu(OH)_2" },
  { name: "Sulfate de sodium", formula: "Na_2SO_4" },
  { name: "Zinc", formula: "Zn" },
  { name: "Chlorure de zinc", formula: "ZnCl_2" },
  { name: "Hydroxyde de potassium", formula: "KOH" },
  { name: "Sulfate de potassium", formula: "K_2SO_4" },
  { name: "Peroxyde d'hydrogène", formula: "H_2O_2" },
  { name: "Chlorure de plomb(II)", formula: "PbCl_2" },
  { name: "Iodure de potassium", formula: "KI" },
  { name: "Iodure de plomb(II)", formula: "PbI_2" },
  { name: "Chlorure de potassium", formula: "KCl" },
  { name: "Acétate de sodium", formula: "CH_3COONa" },
  { name: "Soufre", formula: "S" },
  { name: "Nitrate de baryum", formula: "Ba(NO_3)_2" },
  { name: "Sulfate de baryum", formula: "BaSO_4" },
  { name: "Cuivre", formula: "Cu" },
  { name: "Nitrate de cuivre(II)", formula: "Cu(NO_3)_2" },
  { name: "Argent", formula: "Ag" },
  { name: "Phosphate de calcium", formula: "Ca_3(PO_4)_2" },
  { name: "Soufre", formula: "S_8" },
  { name: "Nitrate de potassium", formula: "KNO_3" },
  { name: "Azote", formula: "N_2" },
  { name: "Nitrate de plomb(II)", formula: "Pb(NO_3)_2" },
  { name: "Sulfate de plomb(II)", formula: "PbSO_4" },
  { name: "Oxyde de calcium", formula: "CaO" },
  { name: "Chlorure de cuivre(II)", formula: "CuCl_2" },
  { name: "Chlorure de fer(II)", formula: "FeCl_2" },
  { name: "Dichlore", formula: "Cl_2" },
  { name: "Protoxyde d'azote", formula: "N_2O" },
  { name: "Peroxyde de dinitrogène", formula: "N_2O_4" },
  { name: "Dioxyde d'azote", formula: "NO_2" },
  { name: "Chlorate de potassium", formula: "KClO_3" },
  { name: "Sulfate de zinc", formula: "ZnSO_4" },
  { name: "Acide phosphorique", formula: "H_3PO_4" },
  { name: "Oxyde de sodium", formula: "Na_2O" },
  { name: "Monoxyde d'azote", formula: "NO" },
  { name: "Monoxyde de carbone", formula: "CO" },
  { name: "Oxyde de fer(III)", formula: "Fe_3O_4" },
  { name: "Sulfure de cuivre(I)", formula: "Cu_2S" },
  { name: "Oxyde de cuivre(I)", formula: "Cu_2O" },
  { name: "Ion hydronium", formula: "H_3O^+" },
  { name: "Ion sulfate", formula: "SO_4^{2-}," },
  { name: "Ion fer(II)", formula: "Fe^{2+}," },
  { name: "Ion hydroxyde", formula: "OH^-" },
  { name: "Ion argent(I)", formula: "Ag^+" },
  { name: "Ion phosphate", formula: "PO_4^{3-}," },
  { name: "Phosphate d'argent(I)", formula: "Ag_3PO_4" },
  { name: "Ion cuivre(II)", formula: "Cu^{2+}," },
  { name: "Acétate de sodium", formula: "CH_3COONa" },
  { name: "Phosphate de calcium", formula: "Ca_3(PO_3)_2" },
  { name: "Chlorure d'ammonium", formula: "NH_4Cl" },
  { name: "cyclooctasoufre ", formula: "S_8" },
  { name: "Hydroxyde de magnésium", formula: "Mg(OH)_2" },
  { name: "Chlorure de magnésium", formula: "MgCl_2" },
];

const getId = (name: string) => {
  return name
    .replaceAll(" ", "-")
    .replaceAll("(", "-")
    .replaceAll(")", "")
    .replaceAll("'", "-");
};
const molecules = moleculesData.map((molData) => {
  return { ...molData, id: getId(molData.name) as KeyId };
});
export const moleculesKeysProps = molecules.map((moleculeData): KeyProps => {
  return {
    id: moleculeData.id,
    formatedId: moleculeData.id,
    label: textifyInLatex(moleculeData.formula),
    labelType: "tex",
    mathfieldInstructions: {
      content: textifyInLatex(moleculeData.formula),
      method: "write",
    },
    group: "molecules",
  };
});
