import os
from fpdf import FPDF

# Função para criar PDF
def create_pdf(client_number, reference_month, data, output_dir):
    pdf = FPDF()
    pdf.add_page()
    pdf.set_font("Arial", size=12)

    # Adicionar os dados ao PDF
    pdf.cell(200, 10, txt=f"Nº DO CLIENTE: {client_number}", ln=True, align='L')
    pdf.cell(200, 10, txt=f"Mês de Referência: {reference_month}", ln=True, align='L')
    pdf.cell(200, 10, txt=f"Consumo de Energia (kWh): {data['energyConsumption']}", ln=True, align='L')
    pdf.cell(200, 10, txt=f"Custo de Energia (R$): {data['energyCost']}", ln=True, align='L')
    pdf.cell(200, 10, txt=f"Consumo SCEE (kWh): {data['sceeeConsumption']}", ln=True, align='L')
    pdf.cell(200, 10, txt=f"Custo SCEE (R$): {data['sceeeCost']}", ln=True, align='L')
    pdf.cell(200, 10, txt=f"Quantidade Compensada (kWh): {data['compensatedQuantity']}", ln=True, align='L')
    pdf.cell(200, 10, txt=f"Energia Compensada (R$): {data['compensatedEnergy']}", ln=True, align='L')
    pdf.cell(200, 10, txt=f"Contribuição de Iluminação Pública (R$): {data['publicLightingContribution']}", ln=True, align='L')

    # Verifica e cria o diretório de saída se necessário
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    pdf_path = os.path.join(output_dir, f"{client_number}_{reference_month}.pdf")
    pdf.output(pdf_path)
    return pdf_path

# Dados para criação do PDF
client_number = "7100000002"
reference_month = "2023-06"
data = {
    "energyConsumption": 130,
    "energyCost": 160.00,
    "sceeeConsumption": 1299,
    "sceeeCost": 659.82,
    "compensatedQuantity": 1299,
    "compensatedEnergy": -633.04,
    "publicLightingContribution": 41.19
}

# Diretório de saída
output_directory = "backend/invoices"

# Criação do PDF
pdf_path = create_pdf(client_number, reference_month, data, output_directory)
print("PDF criado:", pdf_path)
