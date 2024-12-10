const words = [
  {
    word: "evident",
    hint: "clearly revealed to the mind or the senses or judgment"
  },
  {
    word: "utter",
    hint: "without qualification"
  },
  {
    word: "scarce",
    hint: "deficient in quantity or number compared with the demand"
  },
  {
    word: "circumstances",
    hint: "one's overall condition in life"
  },
  {
    word: "flourish",
    hint: "grow vigorously"
  },
  {
    word: "sanction",
    hint: "give authority or permission to"
  },
  {
    word: "comprehensive",
    hint: "broad in scope"
  },
  {
    word: "accede",
    hint: "yield to another's wish or opinion"
  },
  {
    word: "austere",
    hint: "severely simple"
  },
  {
    word: "arbitrary",
    hint: "based on or subject to individual discretion or preference"
  },
  {
    word: "ominous",
    hint: "threatening or foreshadowing evil or tragic developments"
  },
  {
    word: "usurp",
    hint: "seize and take control without authority"
  },
  {
    word: "precision",
    hint: "the quality of being exact"
  },
  {
    word: "precept",
    hint: "a rule of personal conduct"
  },
  {
    word: "tenacious",
    hint: "stubbornly unyielding"
  },
  {
    word: "ignominious",
    hint: "deserving or bringing disgrace or shame"
  },
  {
    word: "zenith",
    hint: "the highest point of something"
  },
  {
    word: "iniquitous",
    hint: "characterized by injustice or wickedness"
  },
  {
    word: "erstwhile",
    hint: "belonging to some prior time"
  },
  {
    word: "parsimonious",
    hint: "excessively unwilling to spend"
  },
  {
    word: "anthropomorphic",
    hint: "suggesting human features for animals or inanimate things"
  },
  {
    word: "halcyon",
    hint: "idyllically calm and peaceful; suggesting happy tranquility"
  },
  {
    word: "pacifist",
    hint: "opposed to war"
  },
  {
    word: "dormer",
    hint: "a gabled extension built out from a sloping roof"
  },
  {
    word: "coax",
    hint: "influence or persuade by gentle and persistent urging"
  },
  {
    word: "aberration",
    hint: "a state or condition markedly different from the norm"
  },
  {
    word: "abhor",
    hint: "find repugnant"
  },
  {
    word: "acquiesce",
    hint: "to agree or express agreement"
  },
  {
    word: "alacrity",
    hint: "liveliness and eagerness"
  },
  {
    word: "amiable",
    hint: "diffusing warmth and friendliness"
  },
  {
    word: "appease",
    hint: "make peace with"
  },
  {
    word: "arcane",
    hint: "requiring secret or mysterious knowledge"
  },
  {
    word: "avarice",
    hint: "reprehensible acquisitiveness; insatiable desire for wealth"
  },
  {
    word: "brazen",
    hint: "unrestrained by convention or propriety"
  },
  {
    word: "brusque",
    hint: "rudely abrupt or blunt in speech or manner"
  },
  {
    word: "cajole",
    hint: "influence or urge by gentle urging, caressing, or flattering"
  },
  {
    word: "callous",
    hint: "emotionally hardened"
  },
  {
    word: "candor",
    hint: "the quality of being honest and straightforward"
  },
  {
    word: "chide",
    hint: "scold or reprimand severely or angrily"
  },
  {
    word: "circumspect",
    hint: "heedful of potential consequences"
  },
  {
    word: "clandestine",
    hint: "conducted with or marked by hidden aims or methods"
  },
  {
    word: "coerce",
    hint: "to cause to do through pressure or necessity"
  },
  {
    word: "coherent",
    hint: "marked by an orderly and consistent relation of parts"
  },
  {
    word: "complacency",
    hint: "the feeling you have when you are satisfied with yourself"
  },
  {
    word: "confidant",
    hint: "someone to whom private matters are told"
  },
  {
    word: "connive",
    hint: "form intrigues (for) in an underhand manner"
  },
  {
    word: "cumulative",
    hint: "increasing by successive addition"
  },
  {
    word: "debase",
    hint: "make impure by adding a foreign or inferior substance"
  },
  {
    word: "decry",
    hint: "express strong disapproval of"
  },
  {
    word: "deferential",
    hint: "showing courteous regard for people's feelings"
  },
  {
    word: "demure",
    hint: "affectedly modest or shy especially in a playful or provocative way"
  },
  {
    word: "deride",
    hint: "treat or speak of with contempt"
  },
  {
    word: "despot",
    hint: "a cruel and oppressive dictator"
  },
  {
    word: "diligent",
    hint: "quietly and steadily persevering in detail or exactness"
  },
  {
    word: "elated",
    hint: "exultantly proud and joyful; in high spirits"
  },
  {
    word: "eloquent",
    hint: "expressing yourself readily, clearly, effectively"
  },
  {
    word: "embezzle",
    hint: "appropriate fraudulently for one's own use"
  },
  {
    word: "empathy",
    hint: "understanding and entering into another's feelings"
  },
  {
    word: "enmity",
    hint: "a state of deep-seated ill-will"
  },
  {
    word: "erudite",
    hint: "having or showing profound knowledge"
  },
  {
    word: "extol",
    hint: "praise, glorify, or honor"
  },
  {
    word: "fabricate",
    hint: "put together out of artificial or natural components"
  },
  {
    word: "feral",
    hint: "wild and menacing"
  },
  {
    word: "flabbergasted",
    hint: "as if struck dumb with astonishment and surprise"
  },
  {
    word: "forsake",
    hint: "leave someone who needs or counts on you; leave in the lurch"
  },
  {
    word: "fractious",
    hint: "easily irritated or annoyed"
  },
  {
    word: "furtive",
    hint: "secret and sly or sordid"
  },
  {
    word: "gluttony",
    hint: "habitual eating to excess"
  },
  {
    word: "gratuitous",
    hint: "unnecessary and unwarranted"
  },
  {
    word: "haughty",
    hint: "having or showing arrogant superiority"
  },
  {
    word: "hypocrisy",
    hint: "pretending to have qualities or beliefs that you do not have"
  },
  {
    word: "impeccable",
    hint: "without fault or error"
  },
  {
    word: "impertinent",
    hint: "improperly forward or bold"
  },
  {
    word: "implacable",
    hint: "incapable of being appeased or pacified"
  },
  {
    word: "impudent",
    hint: "improperly forward or bold"
  },
  {
    word: "incisive",
    hint: "demonstrating ability to recognize or draw fine distinctions"
  },
  {
    word: "indolent",
    hint: "disinclined to work or exertion"
  },
  {
    word: "inept",
    hint: "generally incompetent and ineffectual"
  },
  {
    word: "infamy",
    hint: "a state of extreme dishonor"
  },
  {
    word: "inhibit",
    hint: "limit the range or extent of"
  },
  {
    word: "innate",
    hint: "present at birth but not necessarily hereditary"
  },
  {
    word: "insatiable",
    hint: "impossible to satisfy"
  },
  {
    word: "insular",
    hint: "narrowly restricted in outlook or scope"
  },
  {
    word: "intrepid",
    hint: "invulnerable to fear or intimidation"
  },
  {
    word: "inveterate",
    hint: "habitual"
  },
  {
    word: "jubilant",
    hint: "full of high-spirited delight"
  },
  {
    word: "knell",
    hint: "the sound of a bell rung slowly to announce a death"
  },
  {
    word: "lithe",
    hint: "moving and bending with ease"
  },
  {
    word: "lurid",
    hint: "glaringly vivid and graphic; marked by sensationalism"
  },
  {
    word: "maverick",
    hint: "someone who exhibits great independence in thought and action"
  },
  {
    word: "maxim",
    hint: "a saying that is widely accepted on its own merits"
  },
  {
    word: "meticulous",
    hint: "marked by precise accordance with details"
  },
  {
    word: "modicum",
    hint: "a small or moderate or token amount"
  },
  {
    word: "morose",
    hint: "showing a brooding ill humor"
  },
  {
    word: "myriad",
    hint: "a large indefinite number"
  },
  {
    word: "nadir",
    hint: "an extreme state of adversity; the lowest point of anything"
  },
  {
    word: "nominal",
    hint: "insignificantly small; a matter of form only"
  },
  {
    word: "novice",
    hint: "someone new to a field or activity"
  },
  {
    word: "nuance",
    hint: "a subtle difference in meaning or opinion or attitude"
  },
  {
    word: "oblivious",
    hint: "lacking conscious awareness of"
  },
  {
    word: "obscure",
    hint: "not clearly understood or expressed"
  },
  {
    word: "obsolete",
    hint: "no longer in use"
  },
  {
    word: "obstinate",
    hint: "marked by tenacious unwillingness to yield"
  },
  {
    word: "obtuse",
    hint: "lacking in insight or discernment"
  },
  {
    word: "panacea",
    hint: "hypothetical remedy for all ills or diseases"
  },
  {
    word: "parody",
    hint: "a composition that imitates or misrepresents a style"
  },
  {
    word: "penchant",
    hint: "a strong liking"
  },
  {
    word: "perusal",
    hint: "reading carefully with intent to remember"
  },
  {
    word: "plethora",
    hint: "extreme excess"
  },
  {
    word: "predilection",
    hint: "a predisposition in favor of something"
  },
  {
    word: "quaint",
    hint: "attractively old-fashioned"
  },
  {
    word: "rash",
    hint: "marked by defiant disregard for danger or consequences"
  },
  {
    word: "refurbish",
    hint: "make brighter and prettier"
  },
  {
    word: "repudiate",
    hint: "refuse to acknowledge, ratify, or recognize as valid"
  },
  {
    word: "rife",
    hint: "excessively abundant"
  },
  {
    word: "salient",
    hint: "having a quality that thrusts itself into attention"
  },
  {
    word: "serendipity",
    hint: "good luck in making unexpected and fortunate discoveries"
  },
  {
    word: "staid",
    hint: "characterized by dignity and propriety"
  },
  {
    word: "superfluous",
    hint: "more than is needed, desired, or required"
  },
  {
    word: "sycophant",
    hint: "a person who tries to please someone to gain an advantage"
  },
  {
    word: "taciturn",
    hint: "habitually reserved and uncommunicative"
  },
  {
    word: "truculent",
    hint: "defiantly aggressive"
  },
  {
    word: "umbrage",
    hint: "a feeling of anger caused by being offended"
  },
  {
    word: "venerable",
    hint: "profoundly honored"
  },
  {
    word: "vex",
    hint: "disturb, especially by minor irritations"
  },
  {
    word: "vociferous",
    hint: "conspicuously and offensively loud"
  },
  {
    word: "wanton",
    hint: "a lewd or immoral person"
  },
  {
    word: "zephyr",
    hint: "a slight wind (usually refreshing)"
  },
  {
    word: "abate",
    hint: "become less in amount or intensity"
  },
  {
    word: "abjure",
    hint: "formally reject or disavow a formerly held belief"
  },
  {
    word: "abrogate",
    hint: "revoke formally"
  },
  {
    word: "acerbic",
    hint: "harsh or corrosive in tone"
  },
  {
    word: "acrimony",
    hint: "a rough and bitter manner"
  },
  {
    word: "acumen",
    hint: "shrewdness shown by keen insight"
  },
  {
    word: "adumbrate",
    hint: "describe roughly or give the main points or summary of"
  },
  {
    word: "alacrity",
    hint: "liveliness and eagerness"
  },
  {
    word: "anathema",
    hint: "a formal ecclesiastical curse accompanied by excommunication"
  },
  {
    word: "antipathy",
    hint: "a feeling of intense dislike"
  },
  {
    word: "approbation",
    hint: "official approval"
  },
  {
    word: "arrogate",
    hint: "seize and take control without authority"
  },
  {
    word: "ascetic",
    hint: "someone who practices self-denial as a spiritual discipline"
  },
  {
    word: "aspersion",
    hint: "a disparaging remark"
  },
  {
    word: "assiduous",
    hint: "marked by care and persistent effort"
  },
  {
    word: "blandishment",
    hint: "flattery intended to persuade"
  },
  {
    word: "boon",
    hint: "a desirable state"
  },
  {
    word: "brusque",
    hint: "rudely abrupt or blunt in speech or manner"
  },
  {
    word: "buffet",
    hint: "strike, beat repeatedly"
  },
  {
    word: "burnish",
    hint: "polish and make shiny"
  },
  {
    word: "buttress",
    hint: "a support usually of stone or brick"
  },
  {
    word: "cacophony",
    hint: "loud confusing disagreeable sounds"
  },
  {
    word: "cajole",
    hint: "influence or urge by gentle urging, caressing, or flattering"
  },
  {
    word: "calumny",
    hint: "a false accusation of an offense"
  },
  {
    word: "capitulate",
    hint: "surrender under agreed conditions"
  },
  {
    word: "clemency",
    hint: "leniency and compassion shown toward offenders"
  },
  {
    word: "cogent",
    hint: "powerfully persuasive"
  },
  {
    word: "concomitant",
    hint: "following or accompanying as a consequence"
  },
  {
    word: "conflagration",
    hint: "a very intense and uncontrolled fire"
  },
  {
    word: "contrite",
    hint: "feeling or expressing pain or sorrow for sins or offenses"
  },
  {
    word: "conundrum",
    hint: "a difficult problem"
  },
  {
    word: "credulity",
    hint: "tendency to believe readily"
  },
  {
    word: "cupidity",
    hint: "extreme greed for material wealth"
  },
  {
    word: "cursory",
    hint: "hasty and without attention to detail; not thorough"
  },
  {
    word: "decry",
    hint: "express strong disapproval of"
  },
  {
    word: "defile",
    hint: "make dirty or spotty"
  },
  {
    word: "deleterious",
    hint: "harmful to living things"
  },
  {
    word: "demure",
    hint: "affectedly modest or shy especially in a playful or provocative way"
  },
  {
    word: "deprecate",
    hint: "express strong disapproval of; deplore"
  },
  {
    word: "diaphanous",
    hint: "so thin as to transmit light"
  },
  {
    word: "diffident",
    hint: "lacking self-confidence"
  },
  {
    word: "dissemble",
    hint: "behave unnaturally or affectedly"
  },
  {
    word: "ebullient",
    hint: "joyously unrestrained"
  },
  {
    word: "effrontery",
    hint: "audacious behavior that you have no right to"
  },
  {
    word: "egregious",
    hint: "conspicuously and outrageously bad or reprehensible"
  },
  {
    word: "enervate",
    hint: "weaken mentally or morally"
  },
  {
    word: "ephemeral",
    hint: "anything short-lived, as an insect that lives only for a day"
  },
  {
    word: "eschew",
    hint: "avoid and stay away from deliberately"
  },
  {
    word: "evanescent",
    hint: "tending to vanish like vapor"
  },
  {
    word: "exculpate",
    hint: "pronounce not guilty of criminal charges"
  },
  {
    word: "execrable",
    hint: "unequivocally detestable"
  },
  {
    word: "exigent",
    hint: "demanding immediate attention"
  },
  {
    word: "expedient",
    hint: "appropriate to a purpose; practical"
  },
  {
    word: "expiate",
    hint: "make amends for"
  },
  {
    word: "extant",
    hint: "still in existence; not extinct or destroyed or lost"
  },
  {
    word: "fatuous",
    hint: "devoid of intelligence"
  },
  {
    word: "fetter",
    hint: "a shackle for the ankles or feet"
  },
  {
    word: "florid",
    hint: "elaborately or excessively ornamented"
  },
  {
    word: "fractious",
    hint: "easily irritated or annoyed"
  },
  {
    word: "garrulous",
    hint: "full of trivial conversation"
  },
  {
    word: "gregarious",
    hint: "temperamentally seeking and enjoying the company of others"
  },
  {
    word: "hapless",
    hint: "unfortunate and deserving pity"
  },
  {
    word: "harangue",
    hint: "a loud bombastic declamation expressed with strong emotion"
  },
  {
    word: "hegemony",
    hint: "the dominance or leadership of one social group over others"
  },
  {
    word: "iconoclast",
    hint: "someone who attacks cherished ideas or institutions"
  },
  {
    word: "impecunious",
    hint: "not having enough money to pay for necessities"
  },
  {
    word: "impetuous",
    hint: "characterized by undue haste and lack of thought"
  },
  {
    word: "inchoate",
    hint: "only partly in existence; imperfectly formed"
  },
  {
    word: "incontrovertible",
    hint: "impossible to deny or disprove"
  },
  {
    word: "indefatigable",
    hint: "showing sustained enthusiastic action with unflagging vitality"
  },
  {
    word: "ineffable",
    hint: "defying expression or description"
  },
  {
    word: "inexorable",
    hint: "impervious to pleas, persuasion, requests, reason"
  },
  {
    word: "ingenuous",
    hint: "lacking in sophistication or worldliness"
  },
  {
    word: "inimical",
    hint: "not friendly"
  },
  {
    word: "insidious",
    hint: "working or spreading in a hidden and usually injurious way"
  },
  {
    word: "intransigent",
    hint: "impervious to pleas, persuasion, requests, reason"
  },
  {
    word: "invective",
    hint: "abusive language used to express blame or censure"
  },
  {
    word: "inure",
    hint: "cause to accept or become hardened to"
  },
  {
    word: "jejune",
    hint: "lacking interest or significance or impact"
  },
  {
    word: "laconic",
    hint: "brief and to the point"
  },
  {
    word: "legerdemain",
    hint: "an illusory feat"
  },
  {
    word: "limpid",
    hint: "clear and bright"
  },
  {
    word: "mendacious",
    hint: "given to lying"
  },
  {
    word: "multifarious",
    hint: "having many aspects"
  },
  {
    word: "neophyte",
    hint: "any new participant in some activity"
  },
  {
    word: "obdurate",
    hint: "stubbornly persistent in wrongdoing"
  },
  {
    word: "obfuscate",
    hint: "make obscure or unclear"
  },
  {
    word: "obstreperous",
    hint: "noisily and stubbornly defiant"
  },
  {
    word: "officious",
    hint: "intrusive in a meddling or offensive manner"
  },
  {
    word: "opprobrium",
    hint: "a state of extreme dishonor"
  },
  {
    word: "palliate",
    hint: "lessen or to try to lessen the seriousness or extent of"
  },
  {
    word: "paradigm",
    hint: "a standard or typical example"
  },
  {
    word: "pellucid",
    hint: "transparently clear; easily understandable"
  },
  {
    word: "perfidious",
    hint: "tending to betray"
  },
  {
    word: "pertinacious",
    hint: "stubbornly unyielding"
  },
  {
    word: "platitude",
    hint: "a trite or obvious remark"
  },
  {
    word: "probity",
    hint: "complete and confirmed integrity"
  },
  {
    word: "proclivity",
    hint: "a natural inclination"
  },
  {
    word: "promulgate",
    hint: "state or announce"
  },
  {
    word: "propensity",
    hint: "a natural inclination"
  },
  {
    word: "propitious",
    hint: "presenting favorable circumstances"
  },
  {
    word: "pugnacious",
    hint: "ready and able to resort to force or violence"
  },
  {
    word: "pulchritude",
    hint: "physical beauty (especially of a woman)"
  },
  {
    word: "quixotic",
    hint: "not sensible about practical matters"
  },
  {
    word: "recalcitrant",
    hint: "stubbornly resistant to authority or control"
  },
  {
    word: "redoubtable",
    hint: "inspiring fear"
  },
  {
    word: "reprobate",
    hint: "a person without moral scruples"
  },
  {
    word: "rescind",
    hint: "cancel officially"
  },
  {
    word: "restitution",
    hint: "the act of restoring something to its original state"
  },
  {
    word: "sagacity",
    hint: "the ability to understand and discriminate between relations"
  },
  {
    word: "scurrilous",
    hint: "expressing offensive reproach"
  },
  {
    word: "solicitous",
    hint: "full of anxiety and concern"
  },
  {
    word: "spurious",
    hint: "plausible but false"
  },
  {
    word: "stolid",
    hint: "having or revealing little emotion or sensibility"
  },
  {
    word: "surreptitious",
    hint: "marked by quiet and caution and secrecy"
  },
  {
    word: "tantamount",
    hint: "being essentially equal to something"
  },
  {
    word: "temerity",
    hint: "fearless daring"
  },
  {
    word: "timorous",
    hint: "timid by nature or revealing timidity"
  },
  {
    word: "torpid",
    hint: "in a condition of biological rest or suspended animation"
  },
  {
    word: "turpitude",
    hint: "a corrupt or depraved or degenerate act or practice"
  },
  {
    word: "ubiquitous",
    hint: "being present everywhere at once"
  },
  {
    word: "upbraid",
    hint: "express criticism towards"
  },
  {
    word: "vicissitude",
    hint: "a variation in circumstances or fortune"
  },
  {
    word: "vilify",
    hint: "spread negative information about"
  },
  {
    word: "vitriolic",
    hint: "harsh or corrosive in tone"
  },
  {
    word: "vociferous",
    hint: "conspicuously and offensively loud"
  },
  {
    word: "winsome",
    hint: "charming in a childlike or naive way"
  },
  {
    word: "abate",
    hint: "become less in amount or intensity"
  },
  {
    word: "aberration",
    hint: "a state or condition markedly different from the norm"
  },
  {
    word: "abhor",
    hint: "find repugnant"
  },
  {
    word: "abstruse",
    hint: "difficult to understand"
  },
  {
    word: "acquiesce",
    hint: "to agree or express agreement"
  },
  {
    word: "alacrity",
    hint: "liveliness and eagerness"
  },
  {
    word: "amiable",
    hint: "diffusing warmth and friendliness"
  },
  {
    word: "appease",
    hint: "make peace with"
  },
  {
    word: "arcane",
    hint: "requiring secret or mysterious knowledge"
  },
  {
    word: "avarice",
    hint: "reprehensible acquisitiveness; insatiable desire for wealth"
  },
  {
    word: "brazen",
    hint: "unrestrained by convention or propriety"
  },
  {
    word: "brusque",
    hint: "rudely abrupt or blunt in speech or manner"
  },
  {
    word: "cajole",
    hint: "influence or urge by gentle urging, caressing, or flattering"
  },
  {
    word: "callous",
    hint: "emotionally hardened"
  },
  {
    word: "candor",
    hint: "the quality of being honest and straightforward"
  },
  {
    word: "chide",
    hint: "scold or reprimand severely or angrily"
  },
  {
    word: "circumspect",
    hint: "heedful of potential consequences"
  },
  {
    word: "clandestine",
    hint: "conducted with or marked by hidden aims or methods"
  },
  {
    word: "coerce",
    hint: "to cause to do through pressure or necessity"
  },
  {
    word: "coherent",
    hint: "marked by an orderly and consistent relation of parts"
  },
  {
    word: "complacency",
    hint: "the feeling you have when you are satisfied with yourself"
  },
  {
    word: "confidant",
    hint: "someone to whom private matters are told"
  },
  {
    word: "connive",
    hint: "form intrigues (for) in an underhand manner"
  },
  {
    word: "cumulative",
    hint: "increasing by successive addition"
  },
  {
    word: "debase",
    hint: "make impure by adding a foreign or inferior substance"
  },
  {
    word: "decry",
    hint: "express strong disapproval of"
  },
  {
    word: "deferential",
    hint: "showing courteous regard for people's feelings"
  },
  {
    word: "demure",
    hint: "affectedly modest or shy especially in a playful or provocative way"
  },
  {
    word: "deride",
    hint: "treat or speak of with contempt"
  },
  {
    word: "despot",
    hint: "a cruel and oppressive dictator"
  },
  {
    word: "diligent",
    hint: "quietly and steadily persevering in detail or exactness"
  },
  {
    word: "elated",
    hint: "exultantly proud and joyful; in high spirits"
  },
  {
    word: "eloquent",
    hint: "expressing yourself readily, clearly, effectively"
  },
  {
    word: "embezzle",
    hint: "appropriate fraudulently for one's own use"
  },
  {
    word: "empathy",
    hint: "understanding and entering into another's feelings"
  },
  {
    word: "enmity",
    hint: "a state of deep-seated ill-will"
  },
  {
    word: "erudite",
    hint: "having or showing profound knowledge"
  },
  {
    word: "extol",
    hint: "praise, glorify, or honor"
  },
  {
    word: "fabricate",
    hint: "put together out of artificial or natural components"
  },
  {
    word: "feral",
    hint: "wild and menacing"
  },
  {
    word: "flabbergasted",
    hint: "as if struck dumb with astonishment and surprise"
  },
  {
    word: "forsake",
    hint: "leave someone who needs or counts on you; leave in the lurch"
  },
  {
    word: "fractious",
    hint: "easily irritated or annoyed"
  },
  {
    word: "furtive",
    hint: "secret and sly or sordid"
  },
  {
    word: "gluttony",
    hint: "habitual eating to excess"
  },
  {
    word: "gratuitous",
    hint: "unnecessary and unwarranted"
  },
  {
    word: "haughty",
    hint: "having or showing arrogant superiority"
  },
  {
    word: "hypocrisy",
    hint: "pretending to have qualities or beliefs that you do not have"
  },
  {
    word: "impeccable",
    hint: "without fault or error"
  },
  {
    word: "impertinent",
    hint: "improperly forward or bold"
  },
  {
    word: "implacable",
    hint: "incapable of being appeased or pacified"
  },
  {
    word: "impudent",
    hint: "improperly forward or bold"
  },
  {
    word: "incisive",
    hint: "demonstrating ability to recognize or draw fine distinctions"
  },
  {
    word: "indolent",
    hint: "disinclined to work or exertion"
  },
  {
    word: "inept",
    hint: "generally incompetent and ineffectual"
  },
  {
    word: "infamy",
    hint: "a state of extreme dishonor"
  },
  {
    word: "inhibit",
    hint: "limit the range or extent of"
  },
  {
    word: "innate",
    hint: "present at birth but not necessarily hereditary"
  },
  {
    word: "insatiable",
    hint: "impossible to satisfy"
  },
  {
    word: "insular",
    hint: "narrowly restricted in outlook or scope"
  },
  {
    word: "intrepid",
    hint: "invulnerable to fear or intimidation"
  },
  {
    word: "inveterate",
    hint: "habitual"
  },
  {
    word: "jubilant",
    hint: "full of high-spirited delight"
  },
  {
    word: "knell",
    hint: "the sound of a bell rung slowly to announce a death"
  },
  {
    word: "lithe",
    hint: "moving and bending with ease"
  },
  {
    word: "lurid",
    hint: "glaringly vivid and graphic; marked by sensationalism"
  },
  {
    word: "maverick",
    hint: "someone who exhibits great independence in thought and action"
  },
  {
    word: "maxim",
    hint: "a saying that is widely accepted on its own merits"
  },
  {
    word: "meticulous",
    hint: "marked by precise accordance with details"
  },
  {
    word: "modicum",
    hint: "a small or moderate or token amount"
  },
  {
    word: "morose",
    hint: "showing a brooding ill humor"
  },
  {
    word: "myriad",
    hint: "a large indefinite number"
  },
  {
    word: "nadir",
    hint: "an extreme state of adversity; the lowest point of anything"
  },
  {
    word: "nominal",
    hint: "insignificantly small; a matter of form only"
  },
  {
    word: "novice",
    hint: "someone new to a field or activity"
  },
  {
    word: "nuance",
    hint: "a subtle difference in meaning or opinion or attitude"
  },
  {
    word: "oblivious",
    hint: "lacking conscious awareness of"
  },
  {
    word: "obscure",
    hint: "not clearly understood or expressed"
  },
  {
    word: "obsolete",
    hint: "no longer in use"
  },
  {
    word: "obstinate",
    hint: "marked by tenacious unwillingness to yield"
  },
  {
    word: "obtuse",
    hint: "lacking in insight or discernment"
  },
  {
    word: "panacea",
    hint: "hypothetical remedy for all ills or diseases"
  },
  {
    word: "parody",
    hint: "a composition that imitates or misrepresents a style"
  },
  {
    word: "penchant",
    hint: "a strong liking"
  },
  {
    word: "perusal",
    hint: "reading carefully with intent to remember"
  },
  {
    word: "plethora",
    hint: "extreme excess"
  },
  {
    word: "predilection",
    hint: "a predisposition in favor of something"
  },
  {
    word: "quaint",
    hint: "attractively old-fashioned"
  },
  {
    word: "rash",
    hint: "marked by defiant disregard for danger or consequences"
  },
  {
    word: "refurbish",
    hint: "make brighter and prettier"
  },
  {
    word: "repudiate",
    hint: "refuse to acknowledge, ratify, or recognize as valid"
  },
  {
    word: "rife",
    hint: "excessively abundant"
  },
  {
    word: "salient",
    hint: "having a quality that thrusts itself into attention"
  },
  {
    word: "serendipity",
    hint: "good luck in making unexpected and fortunate discoveries"
  },
  {
    word: "staid",
    hint: "characterized by dignity and propriety"
  },
  {
    word: "superfluous",
    hint: "more than is needed, desired, or required"
  },
  {
    word: "sycophant",
    hint: "a person who tries to please someone to gain an advantage"
  },
  {
    word: "taciturn",
    hint: "habitually reserved and uncommunicative"
  },
  {
    word: "truculent",
    hint: "defiantly aggressive"
  },
  {
    word: "umbrage",
    hint: "a feeling of anger caused by being offended"
  },
  {
    word: "venerable",
    hint: "profoundly honored"
  },
  {
    word: "vex",
    hint: "disturb, especially by minor irritations"
  },
  {
    word: "vociferous",
    hint: "conspicuously and offensively loud"
  },
  {
    word: "wanton",
    hint: "a lewd or immoral person"
  },
  {
    word: "zephyr",
    hint: "a slight wind (usually refreshing)"
  },
  {
    word: "abate",
    hint: "become less in amount or intensity"
  },
  {
    word: "aberration",
    hint: "a state or condition markedly different from the norm"
  },
  {
    word: "abhor",
    hint: "find repugnant"
  },
  {
    word: "abstruse",
    hint: "difficult to understand"
  },
  {
    word: "acquiesce",
    hint: "to agree or express agreement"
  },
  {
    word: "alacrity",
    hint: "liveliness and eagerness"
  },
  {
    word: "amiable",
    hint: "diffusing warmth and friendliness"
  },
  {
    word: "appease",
    hint: "make peace with"
  },
  {
    word: "arcane",
    hint: "requiring secret or mysterious knowledge"
  },
  {
    word: "avarice",
    hint: "reprehensible acquisitiveness; insatiable desire for wealth"
  },
  {
    word: "brazen",
    hint: "unrestrained by convention or propriety"
  },
  {
    word: "brusque",
    hint: "rudely abrupt or blunt in speech or manner"
  },
  {
    word: "cajole",
    hint: "influence or urge by gentle urging, caressing, or flattering"
  },
  {
    word: "callous",
    hint: "emotionally hardened"
  },
  {
    word: "candor",
    hint: "the quality of being honest and straightforward"
  },
  {
    word: "chide",
    hint: "scold or reprimand severely or angrily"
  },
  {
    word: "circumspect",
    hint: "heedful of potential consequences"
  },
  {
    word: "clandestine",
    hint: "conducted with or marked by hidden aims or methods"
  },
  {
    word: "coerce",
    hint: "to cause to do through pressure or necessity"
  },
  {
    word: "coherent",
    hint: "marked by an orderly and consistent relation of parts"
  },
  {
    word: "complacency",
    hint: "the feeling you have when you are satisfied with yourself"
  },
  {
    word: "confidant",
    hint: "someone to whom private matters are told"
  },
  {
    word: "connive",
    hint: "form intrigues (for) in an underhand manner"
  },
  {
    word: "cumulative",
    hint: "increasing by successive addition"
  },
  {
    word: "debase",
    hint: "make impure by adding a foreign or inferior substance"
  },
  {
    word: "decry",
    hint: "express strong disapproval of"
  },
  {
    word: "deferential",
    hint: "showing courteous regard for people's feelings"
  },
  {
    word: "demure",
    hint: "affectedly modest or shy especially in a playful or provocative way"
  },
  {
    word: "deride",
    hint: "treat or speak of with contempt"
  },
  {
    word: "despot",
    hint: "a cruel and oppressive dictator"
  },
  {
    word: "diligent",
    hint: "quietly and steadily persevering in detail or exactness"
  },
  {
    word: "elated",
    hint: "exultantly proud and joyful; in high spirits"
  },
  {
    word: "eloquent",
    hint: "expressing yourself readily, clearly, effectively"
  },
  {
    word: "embezzle",
    hint: "appropriate fraudulently for one's own use"
  },
  {
    word: "empathy",
    hint: "understanding and entering into another's feelings"
  },
  {
    word: "enmity",
    hint: "a state of deep-seated ill-will"
  },
  {
    word: "erudite",
    hint: "having or showing profound knowledge"
  },
  {
    word: "extol",
    hint: "praise, glorify, or honor"
  },
  {
    word: "fabricate",
    hint: "put together out of artificial or natural components"
  },
  {
    word: "feral",
    hint: "wild and menacing"
  },
  {
    word: "flabbergasted",
    hint: "as if struck dumb with astonishment and surprise"
  },
  {
    word: "forsake",
    hint: "leave someone who needs or counts on you; leave in the lurch"
  },
  {
    word: "fractious",
    hint: "easily irritated or annoyed"
  },
  {
    word: "furtive",
    hint: "secret and sly or sordid"
  },
  {
    word: "gluttony",
    hint: "habitual eating to excess"
  },
  {
    word: "gratuitous",
    hint: "unnecessary and unwarranted"
  },
  {
    word: "haughty",
    hint: "having or showing arrogant superiority"
  },
  {
    word: "hypocrisy",
    hint: "pretending to have qualities or beliefs that you do not have"
  },
  {
    word: "impeccable",
    hint: "without fault or error"
  },
  {
    word: "impertinent",
    hint: "improperly forward or bold"
  },
  {
    word: "implacable",
    hint: "incapable of being appeased or pacified"
  },
  {
    word: "impudent",
    hint: "improperly forward or bold"
  },
  {
    word: "incisive",
    hint: "demonstrating ability to recognize or draw fine distinctions"
  },
  {
    word: "indolent",
    hint: "disinclined to work or exertion"
  },
  {
    word: "inept",
    hint: "generally incompetent and ineffectual"
  },
  {
    word: "infamy",
    hint: "a state of extreme dishonor"
  },
  {
    word: "inhibit",
    hint: "limit the range or extent of"
  },
  {
    word: "innate",
    hint: "present at birth but not necessarily hereditary"
  },
  {
    word: "insatiable",
    hint: "impossible to satisfy"
  },
  {
    word: "insular",
    hint: "narrowly restricted in outlook or scope"
  },
  {
    word: "intrepid",
    hint: "invulnerable to fear or intimidation"
  },
  {
    word: "inveterate",
    hint: "habitual"
  },
  {
    word: "jubilant",
    hint: "full of high-spirited delight"
  },
  {
    word: "knell",
    hint: "the sound of a bell rung slowly to announce a death"
  },
  {
    word: "lithe",
    hint: "moving and bending with ease"
  },
  {
    word: "lurid",
    hint: "glaringly vivid and graphic; marked by sensationalism"
  },
  {
    word: "maverick",
    hint: "someone who exhibits great independence in thought and action"
  },
  {
    word: "maxim",
    hint: "a saying that is widely accepted on its own merits"
  },
  {
    word: "meticulous",
    hint: "marked by precise accordance with details"
  },
  {
    word: "modicum",
    hint: "a small or moderate or token amount"
  },
  {
    word: "morose",
    hint: "showing a brooding ill humor"
  },
  {
    word: "myriad",
    hint: "a large indefinite number"
  },
  {
    word: "nadir",
    hint: "an extreme state of adversity; the lowest point of anything"
  },
  {
    word: "nominal",
    hint: "insignificantly small; a matter of form only"
  },
  {
    word: "novice",
    hint: "someone new to a field or activity"
  },
  {
    word: "nuance",
    hint: "a subtle difference in meaning or opinion or attitude"
  },
  {
    word: "oblivious",
    hint: "lacking conscious awareness of"
  },
  {
    word: "obscure",
    hint: "not clearly understood or expressed"
  },
  {
    word: "obsolete",
    hint: "no longer in use"
  },
  {
    word: "obstinate",
    hint: "marked by tenacious unwillingness to yield"
  },
  {
    word: "obtuse",
    hint: "lacking in insight or discernment"
  },
  {
    word: "panacea",
    hint: "hypothetical remedy for all ills or diseases"
  },
  {
    word: "parody",
    hint: "a composition that imitates or misrepresents a style"
  },
  {
    word: "penchant",
    hint: "a strong liking"
  },
  {
    word: "perusal",
    hint: "reading carefully with intent to remember"
  },
  {
    word: "plethora",
    hint: "extreme excess"
  },
  {
    word: "predilection",
    hint: "a predisposition in favor of something"
  },
  {
    word: "quaint",
    hint: "attractively old-fashioned"
  },
  {
    word: "rash",
    hint: "marked by defiant disregard for danger or consequences"
  },
  {
    word: "refurbish",
    hint: "make brighter and prettier"
  },
  {
    word: "repudiate",
    hint: "refuse to acknowledge, ratify, or recognize as valid"
  },
  {
    word: "rife",
    hint: "excessively abundant"
  },
  {
    word: "salient",
    hint: "having a quality that thrusts itself into attention"
  },
  {
    word: "serendipity",
    hint: "good luck in making unexpected and fortunate discoveries"
  },
  {
    word: "staid",
    hint: "characterized by dignity and propriety"
  },
  {
    word: "superfluous",
    hint: "more than is needed, desired, or required"
  },
  {
    word: "sycophant",
    hint: "a person who tries to please someone to gain an advantage"
  },
  {
    word: "taciturn",
    hint: "habitually reserved and uncommunicative"
  },
  {
    word: "truculent",
    hint: "defiantly aggressive"
  },
  {
    word: "umbrage",
    hint: "a feeling of anger caused by being offended"
  },
  {
    word: "venerable",
    hint: "profoundly honored"
  },
  {
    word: "vex",
    hint: "disturb, especially by minor irritations"
  },
  {
    word: "vociferous",
    hint: "conspicuously and offensively loud"
  },
  {
    word: "wanton",
    hint: "a lewd or immoral person"
  },
  {
    word: "zephyr",
    hint: "a slight wind (usually refreshing)"
  }
];