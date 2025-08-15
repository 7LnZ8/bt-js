const customerTypeSelect = document.getElementById('customerType');
        const connectionsDiv = document.getElementById('connectionsDiv');
        const billingForm = document.getElementById('billingForm');
        const resultDiv = document.getElementById('result');

        customerTypeSelect.addEventListener('change', (event) => {
            if (event.target.value === 'business') {
                connectionsDiv.classList.remove('hidden');
            } else {
                connectionsDiv.classList.add('hidden');
            }
        });

        billingForm.addEventListener('submit', (event) => {
            event.preventDefault();
            
            const customerID = document.getElementById('customerID').value;
            const customerType = customerTypeSelect.value;
            const premiumChannels = parseInt(document.getElementById('premiumChannels').value) || 0;

            let totalBill = 0;

            if (customerType === 'residential') {
                const processingFee = 4.5;
                const basicServiceFee = 20.5;
                const premiumChannelFee = 7.5;
                totalBill = processingFee + basicServiceFee + (premiumChannels * premiumChannelFee);
            } else if (customerType === 'business') {
                const processingFee = 15;
                const basicServiceFee = 75;
                const premiumChannelFee = 50;
                const connections = parseInt(document.getElementById('connections').value) || 0;

                let connectionFee = 0;
                if (connections > 10) {
                    connectionFee = basicServiceFee + (connections - 10) * 5;
                } else {
                    connectionFee = basicServiceFee;
                }
                
                totalBill = processingFee + connectionFee + (premiumChannels * premiumChannelFee);
            } else {
                resultDiv.innerHTML = "Vui lòng chọn loại khách hàng.";
                return;
            }

            resultDiv.innerHTML = `
                <h2>Hóa đơn khách hàng</h2>
                <p><strong>Mã khách hàng:</strong> ${customerID}</p>
                <p><strong>Loại khách hàng:</strong> ${customerType === 'residential' ? 'Nhà dân' : 'Doanh nghiệp'}</p>
                <p><strong>Tổng tiền:</strong> ${totalBill.toFixed(2)}$</p>
            `;
        });