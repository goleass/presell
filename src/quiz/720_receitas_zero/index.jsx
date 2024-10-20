import { Box, Grid2, Typography } from "@mui/material";
import { NoButton } from "../../components/buttons/noButton";
import { YesButton } from "../../components/buttons/yesButton";
import { Avatar } from "../../components/avatar/avatar";
import { useState } from "react";
import { GenericButton } from "../../components/buttons/genericButton";
import { Logo } from "../../components/logo";
import { ImageButton } from "../../components/buttons/imageButton";
import CheckIcon from "@mui/icons-material/Check";
import { Helmet } from "react-helmet-async";
import axios from "axios";

const sendMessage = async (msg) => {
  try {
    // Enviando o POST para o endpoint '/send'
    const response = await axios.post(
      import.meta.env.VITE_API_SEND_MESSAGE,
      msg
    );

    // Exibe a resposta no console
    console.log("Resposta do servidor:", response.data);
  } catch (error) {
    console.error("Erro ao enviar o JSON:", error);
  }
};

function Pixel() {
  return (
    <Helmet>
      <script id="facebook-pixel-script">{`
      		!function (f, b, e, v, n, t, s) {
			if (f.fbq) return; n = f.fbq = function () {
				n.callMethod ?
					n.callMethod.apply(n, arguments) : n.queue.push(arguments)
			};
			if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
			n.queue = []; t = b.createElement(e); t.async = !0;
			t.src = v; s = b.getElementsByTagName(e)[0];
			s.parentNode.insertBefore(t, s)
		}(window, document, 'script',
			'https://connect.facebook.net/en_US/fbevents.js');
		fbq('init', '848325614091392');
		fbq('track', 'PageView');
      `}</script>
      <noscript id="facebook-pixel-image">{`
      ><img height="1" width="1" style="display:none"
			src="https://www.facebook.com/tr?id=848325614091392&ev=PageView&noscript=1" />`}</noscript>
    </Helmet>
  );
}

const getIp = async () => {
  try {
    const response = await axios.get(
      "https://ipinfo.io/json?token=a5f284fb8947cd"
    );
    const { ip, city, region, country } = response.data;

    return { ip, city, region, country };
  } catch (error) {
    console.error("Erro ao obter o IP:", error);
  }
};

export function Quiz() {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    if (step == 6) {
      getIp().then((res) => {
        sendMessage({
          msg: "Clicou em quero ir para pagina",
          location: res,
        }).then(() => {
          setTimeout(() => {
            setStep((current) => current + 1);
          }, 500);
        });
      });
    }
  };

  const steps = [
    <Step key={0} nextStep={nextStep} />,
    <Step2 key={1} nextStep={nextStep} />,
    <Step3 key={2} nextStep={nextStep} />,
    <Step4 key={3} nextStep={nextStep} />,
    <Step5 key={4} nextStep={nextStep} />,
    <Step6 key={5} nextStep={nextStep} />,
    <Step7 key={6} nextStep={nextStep} />,
    <Step8 key={7} nextStep={nextStep} />,
  ];

  return (
    <>
      {/* <Pixel />  */}
      {steps[step]}
    </>
  );
}

function Step({ nextStep }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid2
        container
        spacing={2}
        alignContent={"start"}
        justifyContent={"start"}
      >
        <Grid2 size={12}>
          <Logo />
        </Grid2>

        <Grid2 size={12}>
          <Typography variant="subtitle1" gutterBottom>
            Pergunta 1
          </Typography>
        </Grid2>

        <Grid2
          size={12}
          alignContent={"center"}
          justifyContent={"center"}
          alignSelf={"center"}
          style={{ justifyContent: "center", display: "flex" }}
        >
          <Box>
            <Avatar src={"/images/pexels-anntarazevich-6036009.jpg"} />
          </Box>
        </Grid2>

        <Grid2 size={12}>
          <Typography fontWeight={700} variant="h4" gutterBottom>
            Você gosta de cozinhar?
          </Typography>
        </Grid2>

        <Grid2 size={12}>
          <Typography variant="subtitle1" gutterBottom>
            Selecione uma opção:
          </Typography>
        </Grid2>

        <Grid2 size={12} spacing={10}>
          <Grid2
            container
            spacing={2}
            alignContent={"center"}
            justifyContent={"center"}
          >
            <YesButton onClick={nextStep} />

            <NoButton onClick={nextStep} />
          </Grid2>
        </Grid2>
      </Grid2>
    </Box>
  );
}

function Step2({ nextStep }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid2
        container
        spacing={2}
        alignContent={"start"}
        justifyContent={"start"}
      >
        <Grid2 size={12}>
          <Logo />
        </Grid2>

        <Grid2 size={12}>
          <Typography variant="subtitle1" gutterBottom>
            Pergunta 2
          </Typography>
        </Grid2>

        {/* <Grid2
            size={12}
            alignContent={"center"}
            justifyContent={"center"}
            alignSelf={"center"}
            style={{ justifyContent: "center", display: "flex" }}
          >
            <Box>
              <Avatar src={"/images/pexels-anntarazevich-6036009.jpg"}/>
            </Box>
          </Grid2> */}

        <Grid2 size={12}>
          <Typography fontWeight={700} variant="h4" gutterBottom>
            Qual sua idade?
          </Typography>
        </Grid2>

        <Grid2 size={12}>
          <Typography variant="subtitle1" gutterBottom>
            Isso é importante para entendermos suas necessidades específicas
          </Typography>
        </Grid2>

        <Grid2 size={12} spacing={10}>
          <Grid2
            container
            spacing={3}
            alignContent={"center"}
            justifyContent={"center"}
          >
            <GenericButton full text={"18 - 25 anos"} onClick={nextStep} />
            <GenericButton full text={"26 - 35 anos"} onClick={nextStep} />
            <GenericButton full text={"36 - 45 anos"} onClick={nextStep} />
            <GenericButton full text={"46 - 60 anos"} onClick={nextStep} />
            <GenericButton full text={"Mais de 60 anos"} onClick={nextStep} />
          </Grid2>
        </Grid2>
      </Grid2>
    </Box>
  );
}

function Step3({ nextStep }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid2
        container
        spacing={2}
        alignContent={"start"}
        justifyContent={"start"}
      >
        <Grid2 size={12}>
          <Logo />
        </Grid2>
        <Grid2 size={12}>
          <Typography variant="subtitle1" gutterBottom>
            Pergunta 3
          </Typography>
        </Grid2>

        <Grid2 size={12}>
          <Typography fontWeight={700} variant="h4" gutterBottom>
            Você tem alguma condição de saúde ou restrição alimentar?
          </Typography>
        </Grid2>

        <Grid2 size={12}>
          <Typography variant="subtitle1" gutterBottom>
            Selecione uma opção:
          </Typography>
        </Grid2>

        <Grid2 size={12} spacing={10}>
          <Grid2
            container
            spacing={3}
            alignContent={"center"}
            justifyContent={"center"}
          >
            <ImageButton
              text={"Nenhum"}
              src={"/images/nenhum.png"}
              onClick={nextStep}
            />
            <ImageButton
              text={"Diabetes"}
              src={"/images/diabetes.png"}
              onClick={nextStep}
            />
            <ImageButton
              text={"Intolerância glúten"}
              src={"/images/gluten.png"}
              onClick={nextStep}
            />
            <ImageButton
              text={"Intolerância à lactose"}
              src={"/images/lactose.png"}
              onClick={nextStep}
            />
          </Grid2>
        </Grid2>
      </Grid2>
    </Box>
  );
}

function Step4({ nextStep }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid2
        container
        spacing={2}
        alignContent={"start"}
        justifyContent={"start"}
      >
        <Grid2 size={12}>
          <Logo />
        </Grid2>
        <Grid2 size={12}>
          <Typography variant="subtitle1" gutterBottom>
            Pergunta 4
          </Typography>
        </Grid2>

        <Grid2
          size={12}
          alignContent={"center"}
          justifyContent={"center"}
          alignSelf={"center"}
          style={{ justifyContent: "center", display: "flex" }}
        >
          <Box>
            <Avatar src={"/images/receita_facil_dificil.png"} />
          </Box>
        </Grid2>

        <Grid2 size={12}>
          <Typography fontWeight={700} variant="h4" gutterBottom>
            Você prefere receitas rápidas ou elaboradas?
          </Typography>
        </Grid2>

        <Grid2 size={12}>
          <Typography variant="subtitle1" gutterBottom>
            Selecione uma opção:
          </Typography>
        </Grid2>

        <Grid2 size={12} spacing={10}>
          <Grid2
            container
            spacing={3}
            alignContent={"center"}
            justifyContent={"center"}
          >
            <GenericButton full text={"Rápidas"} onClick={nextStep} />

            <GenericButton full text={"Elaboradas"} onClick={nextStep} />
          </Grid2>
        </Grid2>
      </Grid2>
    </Box>
  );
}

function Step5({ nextStep }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid2
        container
        spacing={2}
        alignContent={"start"}
        justifyContent={"start"}
      >
        <Grid2 size={12}>
          <Logo />
        </Grid2>

        <Grid2 size={12}>
          <Typography variant="subtitle1" gutterBottom>
            Pergunta 5
          </Typography>
        </Grid2>

        <Grid2 size={12}>
          <Typography fontWeight={700} variant="h4" gutterBottom>
            Você acha difícil encontrar receitas saudáveis e saborosas que sejam
            fáceis de preparar?
          </Typography>
        </Grid2>

        <Grid2 size={12}>
          <Typography variant="subtitle1" gutterBottom>
            Nosso objetivo é facilitar sua vida com receitas práticas e
            deliciosas
          </Typography>
        </Grid2>

        <Grid2 size={12} spacing={10}>
          <Grid2
            container
            spacing={2}
            alignContent={"center"}
            justifyContent={"center"}
          >
            <YesButton onClick={nextStep} />

            <NoButton onClick={nextStep} />
          </Grid2>
        </Grid2>
      </Grid2>
    </Box>
  );
}

function Step6({ nextStep }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid2
        container
        spacing={2}
        alignContent={"start"}
        justifyContent={"start"}
      >
        <Grid2 size={12}>
          <Logo />
        </Grid2>

        <Grid2 size={12}>
          <Typography variant="subtitle1" gutterBottom>
            Pergunta 6
          </Typography>
        </Grid2>

        <Grid2 size={12}>
          <Typography fontWeight={700} variant="h4" gutterBottom>
            Qual seu maior desafio relacionado à alimentação?
          </Typography>
        </Grid2>

        <Grid2 size={12}>
          <Typography variant="subtitle1" gutterBottom>
            Identifique seus desafios para que possamos ajudar a supera-los
          </Typography>
        </Grid2>

        <Grid2 size={12} spacing={10}>
          <Grid2
            container
            spacing={3}
            alignContent={"center"}
            justifyContent={"center"}
          >
            <GenericButton
              full
              text={"Receitas adequadas"}
              onClick={nextStep}
            />
            <GenericButton full text={"Falta de tempo"} onClick={nextStep} />
            <GenericButton
              full
              text={"Pouco conhecimento"}
              onClick={nextStep}
            />
            <GenericButton
              full
              text={"Ingredientes caros"}
              onClick={nextStep}
            />
          </Grid2>
        </Grid2>
      </Grid2>
    </Box>
  );
}

function Step7({ nextStep }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid2
        container
        spacing={2}
        alignContent={"start"}
        justifyContent={"start"}
      >
        <Grid2 size={12}>
          <Logo />
        </Grid2>

        <Grid2
          size={12}
          alignContent={"center"}
          justifyContent={"center"}
          alignSelf={"center"}
          style={{ justifyContent: "center", display: "flex" }}
        >
          <img width={250} height={100} src="/images/atencao.png" />
        </Grid2>

        <Grid2 size={12}>
          <Typography
            textAlign={"start"}
            lineHeight={1}
            fontWeight={700}
            variant="h4"
            gutterBottom
          >
            Só vá para a página se você...
          </Typography>
        </Grid2>

        <Grid2 size={12}>
          <Typography
            textAlign={"start"}
            lineHeight={1.4}
            variant="subtitle1"
            gutterBottom
          >
            <CheckIcon style={{ marginBottom: "-4px" }} /> Estiver buscando
            variedade e novas ideias para suas refeições, sem abrir mão do
            prazer de comer.
          </Typography>
        </Grid2>

        <Grid2 size={12}>
          <Typography
            textAlign={"start"}
            lineHeight={1.4}
            variant="subtitle1"
            gutterBottom
          >
            <CheckIcon style={{ marginBottom: "-4px" }} /> Se você quer
            desfrutar de uma culinária deliciosa e sem restrições
          </Typography>
        </Grid2>

        <Grid2 size={12}>
          <Typography
            textAlign={"start"}
            lineHeight={1.4}
            variant="subtitle1"
            gutterBottom
          >
            <CheckIcon style={{ marginBottom: "-4px" }} /> Deseja reduzir o
            cunsumo de açucar e glúten sem abrir mão de sobremesas e pratos
            saborosos.
          </Typography>
        </Grid2>

        <Grid2 size={12} spacing={10}>
          <Grid2
            container
            spacing={3}
            alignContent={"center"}
            justifyContent={"center"}
          >
            <GenericButton
              full
              text={"Sim, quero muito!"}
              onClick={nextStep}
              style={{
                backgroundColor: "#00FA9A",
                boxShadow: "0px 10px 0px -3px green",
              }}
            />
          </Grid2>
        </Grid2>
      </Grid2>
    </Box>
  );
}

function Step8({ nextStep }) {
  window.location.href =
    "https://www.vomargarida.com.br/receitas-que-nao-vao-fogo";
}
