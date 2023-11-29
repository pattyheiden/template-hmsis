import { FaGlobeAmericas, FaDollarSign, FaRegClock, FaExpandArrowsAlt, FaRegComments, FaRegChartBar, FaSortAmountUp } from "react-icons/fa"
import { FeedList } from "./FeedList";


export function Benefits() {
    return (
        <div id="benefit" className="lg:w-[1130px] lg:mt-0 flex flex-col w-screen mx-auto px-6 mt-30">
            <div className="flex justify-center">
                <span className="text-zinc-950 text-2xl font-extrabold text-center">Vantagens de ter sua própria loja virtual</span>
            </div>
            <div className="mt-20">
                <FeedList icon={FaGlobeAmericas} title="Acesso global" text="Com uma loja virtual, você pode alcançar clientes em todo o mundo, sem as limitações geográficas de uma loja física. Isso permite que você amplie seu alcance e potencialmente aumente suas vendas." />
                <FeedList icon={FaDollarSign} title="Baixos custos operacionais" text="Você não precisa se preocupar com aluguel de espaço, equipe de vendas presencial, manutenção do local, entre outros custos associados, resultando em maiores margens de lucro." />
                <FeedList icon={FaRegClock} title="Disponibilidade 24/7" text="Sua loja virtual está disponível para os clientes 24 horas por dia, 7 dias por semana. Isso significa que as pessoas podem fazer compras em seu site a qualquer momento, de acordo com sua conveniência." />
                <FeedList icon={FaExpandArrowsAlt} title="Maior alcance de produtos" text="Com uma loja virtual, você pode listar e vender um número muito maior de produtos, sem se preocupar com restrições de espaço. Isso permite que você ofereça uma variedade mais ampla de opções aos seus clientes." />
                <FeedList icon={FaRegComments} title="Interação direta com os clientes" text="Uma loja virtual oferece a oportunidade de interagir diretamente com os clientes por meio de recursos como bate-papo ao vivo, comentários e avaliações de produtos. Isso pode ajudar a construir relacionamentos mais próximos com seus clientes e fornecer um atendimento personalizado." />
                <FeedList icon={FaRegChartBar} title="Análise e monitoramento" text="Com uma loja virtual, você pode facilmente acompanhar e analisar o comportamento de compra dos seus clientes. Isso fornece informações valiosas sobre suas preferências, padrões de compra e tendências de mercado. Com esses dados, você pode ajustar sua estratégia de vendas, melhorar a experiência do cliente e impulsionar suas vendas." />
                <FeedList icon={FaSortAmountUp} title="Flexibilidade e escalabilidade" text="Uma loja virtual oferece flexibilidade para fazer alterações e atualizações em seu catálogo de produtos, preços e ofertas de forma rápida e fácil. Além disso, é mais fácil expandir e escalar seu negócio online, adicionando novos produtos, segmentando novos mercados ou aumentando sua capacidade de atendimento." />

            </div>
        </div>
    )
}